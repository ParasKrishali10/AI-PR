import { Worker } from "bullmq"
import IORedis from "ioredis"
import { prisma } from "./prisma.ts"
import { createAppAuth } from "@octokit/auth-app"
import { Octokit } from "@octokit/rest"
import { notify } from "./ai.ts"

const connection = new IORedis(process.env.REDIS_URL!, {
  maxRetriesPerRequest: null,
})

const worker = new Worker(
  "pr-risk-analysis",
  async (job) => {
    console.log("📥 PR Risk Job received")
    console.log("Job data:", job.data)

    const { repositoryId, prNumber, userId } = job.data

    const githubRepoId = Number(repositoryId)

    const repo = await prisma.repository.findUnique({
      where: { githubRepoId }
    })

    if (!repo) {
      console.log("Repository not found")
      return
    }


    const settingsFromDb = await prisma.settings.findUnique({
      where: { userId:userId.toString() }
    })
    const settings = settingsFromDb ?? {
      enableDependencyRisk: true,
      enableAuthRisk: true,
      enableMaliciousRisk: true,
      ignoredPaths: ["test/", "__tests__/"],
      allowedExtensions: [".js", ".ts", ".jsx", ".tsx"],
      enableEval: true,
      enableExec: true,
      enableChildProcess: true,
      enableExternalFetch: true,
    }

    function isCodeFile(filename: string) {
      return settings.allowedExtensions.some(ext =>
        filename.endsWith(ext)
      )
    }

    function shouldIgnoreFile(filename: string) {
      return settings.ignoredPaths.some(dir =>
        filename.startsWith(dir)
      )
    }

    const privateKey = process.env.GITHUB_PRIVATE_KEY!.replace(/\n/g, '\n')

    const auth = createAppAuth({
      appId: process.env.GITHUB_APP_ID!,
      privateKey,
      installationId: repo.installationId,
    })

    const installationAuth = await auth({ type: "installation" })

    const octokit = new Octokit({
      auth: installationAuth.token
    })

    const [owner, repoName] = repo.fullName.split("/")

    const fileResponse = await octokit.pulls.listFiles({
      owner,
      repo: repoName,
      pull_number: prNumber,
      per_page: 100
    })
    const dependencyFiles = [
      "package.json",
      "package-lock.json",
      "yarn.lock",
      "pnpm-lock.yaml",
      "requirements.txt",
      "pom.xml",
      "go.mod",
    ]

    const dependencyFilesChanged = fileResponse.data.filter((p) =>
      dependencyFiles.includes(p.filename)
    )

    let hasDependencyRisk = false
    if (settings.enableDependencyRisk) {
      hasDependencyRisk = dependencyFilesChanged.length > 0
    }
    const authPathKeywords = [
      "auth",
      "authentication",
      "middleware",
      "permissions",
      "guard",
      "policy",
      "acl"
    ]

    const authRelatedFiles = fileResponse.data.filter((file) => {
      const path = file.filename.toLowerCase()
      const segments = path.split("/")

      return segments.some(segment =>
        authPathKeywords.some(keyword =>
          segment === keyword || segment.startsWith(keyword)
        )
      )
    })

    let hasAuthPathRisk = false
    if (settings.enableAuthRisk) {
      hasAuthPathRisk = authRelatedFiles.length > 0
    }
    const suspiciousPatterns = [
      settings.enableEval && { label: "eval", regex: /\beval\s*\(/i },
      settings.enableExec && { label: "exec", regex: /\b(exec|spawn)\s*\(/i },
      settings.enableChildProcess && { label: "child_process", regex: /child_process/i },
      settings.enableExternalFetch && { label: "curl/wget", regex: /\b(curl|wget)\s+http/i },
    ].filter(Boolean) as { label: string; regex: RegExp }[]

    const maliciousFindings: Record<
      string,
      { reasons: string[]; lines: string[] }
    > = {}

    for (const file of fileResponse.data) {
      if (!file.patch) continue
      if (!isCodeFile(file.filename)) continue
      if (shouldIgnoreFile(file.filename)) continue

      const lines = file.patch.split("\n")

      for (const line of lines) {
        if (!line.startsWith("+") || line.startsWith("++")) continue

        for (const pattern of suspiciousPatterns) {
          if (pattern.regex.test(line)) {
            if (!maliciousFindings[file.filename]) {
              maliciousFindings[file.filename] = {
                reasons: [],
                lines: [],
              }
            }

            if (!maliciousFindings[file.filename].reasons.includes(pattern.label)) {
              maliciousFindings[file.filename].reasons.push(pattern.label)
            }

            maliciousFindings[file.filename].lines.push(
              line.slice(1).trim()
            )
          }
        }
      }
    }

    let hasMaliciousCodeRisk = false
    if (settings.enableMaliciousRisk) {
      hasMaliciousCodeRisk = Object.keys(maliciousFindings).length > 0
    }

    // =========================
    // Final Aggregation
    // =========================
    const malciousReasons = Array.from(
      new Set(
        Object.values(maliciousFindings).flatMap((d) => d.reasons)
      )
    )

    const affectedFiles = Array.from(
      new Set([
        ...dependencyFilesChanged.map(f => f.filename),
        ...authRelatedFiles.map(f => f.filename),
        ...Object.keys(maliciousFindings)
      ])
    )

    const pullRequest = await prisma.pullRequest.findFirst({
      where: {
        repoId: repo.id,
        prNumber: prNumber
      }
    })

    if (!pullRequest) {
      console.log("Pull req not found in db")
      return
    }

    await prisma.pullRequestRisk.upsert({
      where: {
        pullRequestId: pullRequest.id
      },
      update: {
        hasDependencyRisk,
        hasAuthRisk: hasAuthPathRisk,
        hasMalciousRisk: hasMaliciousCodeRisk,
        malciousReasons,
        affectedFiles
      },
      create: {
        pullRequestId: pullRequest.id,
        hasDependencyRisk,
        hasAuthRisk: hasAuthPathRisk,
        hasMalciousRisk: hasMaliciousCodeRisk,
        malciousReasons,
        affectedFiles
      }
    })

    const prRisk = await prisma.pullRequestRisk.findUnique({
      where: {
        pullRequestId: pullRequest.id
      }
    })

    if (!prRisk) {
      console.log("No risk data found")
      return
    }

    if (prRisk.commentPosted) {
      console.log("PR comment already posted")
      return
    }

    const aiComment = await notify(prRisk)

    const finalComment = `
⚠️ **Automated Risk Signal (Advisory Only)**

${aiComment}

---
This comment is generated from deterministic risk signals and is intended to assist human reviewers. It does not block or approve the PR.
`

    await octokit.issues.createComment({
      owner,
      repo: repoName,
      issue_number: prNumber,
      body: finalComment
    })

    await prisma.pullRequest.update({
      where: { id: pullRequest.id },
      data: { commentPosted: finalComment }
    })
  },
  { connection }
)

worker.on("completed", (job) => {
  console.log(`Job ${job.id} completed`)
})

worker.on("failed", (job, err) => {
  console.error(`Job ${job?.id} failed`, err)
})