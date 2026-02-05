import {Worker} from "bullmq"
import IORedis from "ioredis"
import { prisma } from "./prisma.ts"
import { createAppAuth } from "@octokit/auth-app"
import { Octokit } from "@octokit/rest"
import { notify } from "./ai.ts"

const connection = new IORedis(process.env.REDIS_URL!, {
  maxRetriesPerRequest: null,
})

const codeFileExtension=[
  ".js", ".ts", ".jsx", ".tsx",
  ".py", ".java", ".go", ".rb",
  ".sh", ".php"
]

const ignoredPaths=[
  "security/",
  "scripts/",
  "tools/",
  "test/",
  "__tests__/"
]

function isCodeFile(filename:string)
{
  return codeFileExtension.some(ext=>filename.endsWith(ext))
}

function shouldIgnoreFile(filename:string){
  return ignoredPaths.some(dir=>filename.startsWith(dir))
}

const worker = new Worker(
  "pr-risk-analysis",
  async (job) => {
    console.log("📥 PR Risk Job received")
    console.log("Job data:", job.data)

    const {repositoryId,prNumber}=job.data

    const githubRepoId = Number(repositoryId)

console.log("repo id value:", repositoryId)
console.log("repo id type:", typeof repositoryId)
console.log("converted id:", githubRepoId)
console.log("converted type:", typeof githubRepoId)
    const repo=await prisma.repository.findUnique({
      where:{githubRepoId}
    })

    if(!repo){
      console.log("Repository not found")
      return;
    }

    const privateKey=process.env.GITHUB_PRIVATE_KEY!.replace(/\n/g,'\n')

      const auth=createAppAuth({
        appId:process.env.GITHUB_APP_ID!,
        privateKey,
        installationId: repo.installationId,
      })

      const installationAuth=await auth({type:"installation"})

      const octokit=new Octokit({
        auth:installationAuth.token
      })

      const [owner,repoName]=repo.fullName.split("/")

      const fileResponse=await octokit.pulls.listFiles({
        owner,
        repo:repoName,
        pull_number:prNumber,
        per_page:100
      })

      console.log(`File changed in PR ${prNumber}`)

      for(const file of fileResponse.data){
        console.log({
          filename:file.filename,
          status:file.status,
          additions:file.additions,
          deletions:file.deletions,
          patch:file.patch?.slice(0,200)
        })
      }

      const dependencyFiles=[
        "package.json",
        "package-lock.json",
        "yarn.lock",
        "pnpm-lock.yaml",
        "requirements.txt",
        "pom.xml",
        "go.mod",
      ]

      const dependencyFilesChanged=fileResponse.data.filter((p)=>
        dependencyFiles.includes(p.filename)
      )

      const hasDependencyRisk = dependencyFilesChanged.length > 0
      if(dependencyFilesChanged.length>0){
        console.log("Dependency risk detected")
        console.log("Modified dependency files",
          dependencyFilesChanged.map((f)=>f.filename)
        )
      }



      else{
        console.log("No dependency changes detected")
      }

       const authPathKeywords=[
        "auth",
        "authentication",
        "middleware",
        "permissions",
        "guard",
        "policy",
        "acl"
      ]

      const authRelatedFiles=fileResponse.data.filter((file)=>{

        const path=file.filename.toLowerCase()
        const segements=path.split("/")

        return segements.some((segment)=>
          authPathKeywords.some((keyword)=>
            segment===keyword || segment.startsWith(`${keyword}`)
          )
        )

  })

      const hasAuthPathRisk=authRelatedFiles.length>0

      if(hasAuthPathRisk){
        console.log("Access-Control Risk Detected")
        console.log("Auth Related files Modiefied",
          authRelatedFiles.map((f)=>f.filename)
        )
      }
      else{
        console.log("No auth / access-control changes detected ")
      }

const suspiciousPatterns: { label: string; regex: RegExp }[] = [
  { label: "Dynamic code execution (eval)", regex: /\beval\s*\(/i },
  { label: "Shell execution", regex: /\b(exec|spawn)\s*\(/i },
  { label: "Child process usage", regex: /child_process/i },
  { label: "Runtime execution (Java)", regex: /Runtime\.getRuntime/i },
  { label: "ProcessBuilder (Java)", regex: /ProcessBuilder/i },
  { label: "Base64 decoding", regex: /\b(atob|btoa)\s*\(/i },
  { label: "Dangerous shell command", regex: /\brm\s+-rf\b/i },
  { label: "Remote script fetch", regex: /\b(curl|wget)\s+http/i },
]

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
const hasMaliciousCodeRisk = Object.keys(maliciousFindings).length > 0

if (hasMaliciousCodeRisk) {
  console.log(" Suspicious / Malicious Code Patterns Detected")

 for (const [file, details] of Object.entries(maliciousFindings)) {
  if (!details || !details.reasons || !details.lines) {
    console.warn(" Skipping malformed malicious finding for file:", file)
    continue
  }

  console.log({
    file,
    reasons: details.reasons,
    examples: details.lines.slice(0, 3),
  })
}

} else {
  console.log(" No suspicious code patterns detected")
}


  const malciousReasons=Array.from(
    new Set(
      Object.values(maliciousFindings).flatMap((d)=>d.reasons)
    )
  )

  const affectedFiles=Array.from(
    new Set([
      ...dependencyFilesChanged.map(f=>f.filename),
      ...authRelatedFiles.map(f=>f.filename),
      ...Object.keys(maliciousFindings)
    ])
  )

  const pullRequest=await prisma.pullRequest.findFirst({
    where:{
      repoId:repo.id,
      prNumber:prNumber
    }
  })

  if(!pullRequest)
  {
    console.log("Pull req not found in db")
    return
  }

  await prisma.pullRequestRisk.upsert({
    where:{
      pullRequestId:pullRequest.id
    },update:{
      hasDependencyRisk,
      hasAuthRisk:hasAuthPathRisk,
      hasMalciousRisk:hasMaliciousCodeRisk,
      malciousReasons,
      affectedFiles

    },create:{
      pullRequestId:pullRequest.id,
      hasDependencyRisk,
      hasAuthRisk:hasAuthPathRisk,
      hasMalciousRisk:hasMaliciousCodeRisk,
      malciousReasons,
      affectedFiles
    }
  })

  const prRisk=await prisma.pullRequestRisk.findUnique({
    where:{
      pullRequestId:pullRequest.id
    }
  })

  if(!prRisk){
      console.log("No risk data found")
      return
  }

  if(prRisk.commentPosted)
  {
    console.log("PR comment already posted")
    return
  }

  const aiComment=await notify(prRisk)
 const finalComment = `
⚠️ **Automated Risk Signal (Advisory Only)**

${aiComment}

---
This comment is generated from deterministic risk signals and is intended to assist human reviewers. It does not block or approve the PR.
`
// console.log(finalComment)

await octokit.issues.createComment({
  owner,
  repo:repoName,
  issue_number:prNumber,
  body:finalComment
})

await prisma.pullRequestRisk.update({
  where:{pullRequestId:pullRequest.id},
  data:{commentPosted:true}
})

  },
  { connection }
)
worker.on("completed", (job) => {
  console.log(` Job ${job.id} completed`)
})

worker.on("failed", (job, err) => {
  console.error(` Job ${job?.id} failed`, err)
})
