import type {
  ConnectedRepository,
  JobState,
  PullRequestDetail,
  PullRequestSummary,
  QueueJob,
  QueueSnapshot,
} from "./dashboardTypes";

declare global {
  // eslint-disable-next-line no-var
  var __AI_PR_RISK_MOCK_STORE__: ReturnType<typeof createMockStore> | undefined;
}

function isoNow() {
  return new Date().toISOString();
}

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeRepoList(): ConnectedRepository[] {
  const now = Date.now();
  return [
    {
      id: 1,
      owner: "acme",
      fullName: "acme/auth-service",
      lastSyncAt: new Date(now - 1000 * 60 * 18).toISOString(),
    },
    {
      id: 2,
      owner: "acme",
      fullName: "acme/frontend-core",
      lastSyncAt: new Date(now - 1000 * 60 * 62).toISOString(),
    },
    {
      id: 3,
      owner: "payments",
      fullName: "payments/payment-gateway",
      lastSyncAt: new Date(now - 1000 * 60 * 60 * 6).toISOString(),
    },
    {
      id: 4,
      owner: "docs",
      fullName: "docs/docs-site",
      lastSyncAt: new Date(now - 1000 * 60 * 60 * 26).toISOString(),
    },
  ];
}

function makeBasePR(repo: ConnectedRepository, prNumber: number): PullRequestDetail {
  const now = Date.now();
  const createdAt = new Date(now - randomInt(1000 * 60 * 30, 1000 * 60 * 60 * 22)).toISOString();
  const updatedAt = createdAt;
  const titleVariants = [
    "fix: harden input validation for auth middleware",
    "feat: add rate-limiting to sensitive endpoints",
    "chore: update dependencies and improve logging",
    "refactor: normalize error handling across services",
    "feat: introduce feature flags for risky migrations",
  ];

  const title = titleVariants[(prNumber - 100) % titleVariants.length];

  return {
    id: `${repo.id}-${prNumber}`,
    repoId: repo.id,
    repoName: repo.fullName,
    title,
    author: ["alice.chen", "sarah.lead", "dave.junior", "maria.dev"].at(prNumber % 4) ?? "dev",
    status: "pending",
    reviewSummary: "",
    createdAt,
    updatedAt,
    prNumber,
    branch: ["main", "release/2.1", "hotfix/issue-42", "feature/ratelimit"][prNumber % 4],
    diffFiles: [
      {
        filePath: "src/auth/middleware.ts",
        lines: [
          { type: "context", content: "export async function requireAuth(req, res) {" },
          { type: "context", content: "  const token = req.headers['authorization']" },
          { type: "removed", content: "  if (!token) return res.status(401).end();" },
          { type: "added", content: "  if (!token) return res.status(401).json({ error: 'missing auth token' });" },
          { type: "context", content: "  const payload = verify(token)" },
          { type: "removed", content: "  req.user = payload" },
          { type: "added", content: "  req.user = { id: payload.sub, roles: payload.roles ?? [] }" },
          { type: "context", content: "}" },
        ],
      },
      {
        filePath: "src/security/policy.ts",
        lines: [
          { type: "context", content: "export function evaluatePolicy(ctx) {" },
          { type: "context", content: "  const risk = ctx.riskScore" },
          { type: "removed", content: "  return risk > 90" },
          { type: "added", content: "  return risk >= 80 && ctx.isSensitiveRoute === true" },
          { type: "context", content: "}" },
        ],
      },
    ],
    comments: [],
    aiIssues: [],
  };
}

function generateAIComments(prNumber: number): { comments: PullRequestDetail["comments"]; issues: string[]; reviewSummary: string } {
  const riskPick = prNumber % 3;
  if (riskPick === 0) {
    return {
      reviewSummary: "Potential auth bypass via permissive token checks. Recommend stricter parsing and consistent error responses.",
      issues: ["Auth middleware token parsing is inconsistent across branches.", "Policy threshold may under-block sensitive routes."],
      comments: [
        {
          id: `c-${prNumber}-1`,
          filePath: "src/auth/middleware.ts",
          severity: "critical",
          issue: "Token absence returns a generic 401 without structured context, which can mask parsing issues and complicate remediation.",
          suggestion: "Return a stable error shape and ensure the middleware always validates token format before verification.",
          excerpt: "if (!token) return res.status(401).json({ error: 'missing auth token' });",
          lineHint: 3,
        },
        {
          id: `c-${prNumber}-2`,
          filePath: "src/security/policy.ts",
          severity: "warning",
          issue: "The policy threshold changed; combined conditions may unintentionally lower risk gating for sensitive routes.",
          suggestion: "Add unit tests for boundary cases (risk=79/80/90) and assert behavior for sensitive routes only.",
          excerpt: "return risk >= 80 && ctx.isSensitiveRoute === true",
          lineHint: 8,
        },
      ],
    };
  }

  if (riskPick === 1) {
    return {
      reviewSummary: "Risk signal indicates potential rate-limit gaps on sensitive endpoints. Add defensive middleware ordering.",
      issues: ["Rate limiting should wrap authentication checks for consistent behavior.", "Log messages may leak sensitive identifiers."],
      comments: [
        {
          id: `c-${prNumber}-1`,
          filePath: "src/auth/middleware.ts",
          severity: "warning",
          issue: "Middleware ordering may allow bursts to reach downstream auth logic before rate limiting is enforced.",
          suggestion: "Ensure rate-limiting is applied before expensive token verification for sensitive routes.",
          excerpt: "const payload = verify(token)",
          lineHint: 5,
        },
        {
          id: `c-${prNumber}-2`,
          filePath: "src/security/policy.ts",
          severity: "info",
          issue: "Policy evaluation does not include a redaction strategy for sensitive logs.",
          suggestion: "Use structured logging with redaction for identifiers and tokens; verify redaction in integration tests.",
          excerpt: "const risk = ctx.riskScore",
          lineHint: 2,
        },
      ],
    };
  }

  return {
    reviewSummary: "Changes look generally safe, but edge-case handling needs tests for null/empty role claims.",
    issues: ["Roles defaulting may hide missing claims in downstream authorization.", "Add regression tests for empty role arrays."],
    comments: [
      {
        id: `c-${prNumber}-1`,
        filePath: "src/auth/middleware.ts",
        severity: "info",
        issue: "Roles are defaulted when roles are missing; this can hide upstream claim schema issues.",
        suggestion: "Distinguish missing roles from explicit empty roles, and add tests covering both.",
        excerpt: "roles: payload.roles ?? []",
        lineHint: 6,
      },
      {
        id: `c-${prNumber}-2`,
        filePath: "src/security/policy.ts",
        severity: "warning",
        issue: "Policy logic should be validated against sensitive route flags in tests.",
        suggestion: "Add parameterized tests for ctx.isSensitiveRoute = true/false.",
        excerpt: "ctx.isSensitiveRoute === true",
        lineHint: 8,
      },
    ],
  };
}

function createMockStore() {
  const repositories = makeRepoList();

  const seedPRs: PullRequestDetail[] = [];
  const prNumbers = [101, 102, 103, 104, 105, 106, 107, 108];
  for (let i = 0; i < prNumbers.length; i++) {
    const repo = repositories[i % repositories.length];
    const pr = makeBasePR(repo, prNumbers[i]);
    seedPRs.push(pr);
  }

  const initialStatuses: Array<"pending" | "analyzing" | "completed"> = ["pending", "analyzing", "completed"];
  for (let i = 0; i < seedPRs.length; i++) {
    const status = initialStatuses[i % initialStatuses.length];
    seedPRs[i].status = status;
    seedPRs[i].updatedAt = new Date(Date.now() - randomInt(1000 * 60 * 5, 1000 * 60 * 60 * 12)).toISOString();
    if (status === "completed") {
      const ai = generateAIComments(seedPRs[i].prNumber);
      seedPRs[i].reviewSummary = ai.reviewSummary;
      seedPRs[i].aiIssues = ai.issues;
      seedPRs[i].comments = ai.comments;
    }
  }

  const jobs: Map<string, QueueJob> = new Map();
  // Seed a few waiting/active jobs that match PR statuses.
  const seededJobIds = seedPRs
    .filter((pr) => pr.status === "pending" || pr.status === "analyzing")
    .slice(0, 5);

  for (const pr of seededJobIds) {
    const state: JobState = pr.status === "pending" ? "waiting" : "active";
    jobs.set(pr.id, {
  id: pr.id,
  name: `pr-${pr.prNumber}`,
  data: {},
  progress: 0,
  timestamp: Date.now(),

  jobId: pr.id,
  repositoryId: pr.repoId,
  prNumber: pr.prNumber,
  state,
  attemptsMade: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
});
  }

  const worker = {
    name: "pr-risk-worker (mock)",
    lastHeartbeatAt: isoNow(),
  };

  function getPRsSnapshot(): PullRequestSummary[] {
    return seedPRs.map((pr) => ({
      id: pr.id,
      repoId: pr.repoId,
      repoName: pr.repoName,
      title: pr.title,
      author: pr.author,
      status: pr.status,
      reviewSummary: pr.reviewSummary,
      updatedAt: pr.updatedAt,
      createdAt: pr.createdAt,
      prNumber: pr.prNumber,
    }));
  }

  function getPRDetailById(id: string): PullRequestDetail | undefined {
    return seedPRs.find((p) => p.id === id);
  }

  function getQueueSnapshot(): QueueSnapshot {
    const list = Array.from(jobs.values()).sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));
    const counts: QueueSnapshot["counts"] = {
      waiting: 0,
      active: 0,
      completed: 0,
      failed: 0,
      delayed:0,
      paused:0
    };
    for (const j of list) counts[j.state] += 1;

    return {
      worker: { ...worker },
      jobs: list.slice(0, 24),
      counts,
    };
  }

  function syncPRWithJob(pr: PullRequestDetail, job: QueueJob) {
    if (job.state === "waiting") {
      pr.status = "pending";
      pr.reviewSummary = pr.reviewSummary || "Queued for risk analysis (mock).";
      pr.updatedAt = job.updatedAt;
      return;
    }

    if (job.state === "active") {
      pr.status = "analyzing";
      pr.reviewSummary = "Analyzing PR with AI risk signals (mock)…";
      pr.updatedAt = job.updatedAt;
      return;
    }

    if (job.state === "completed") {
      pr.status = "completed";
      const ai = generateAIComments(pr.prNumber);
      pr.reviewSummary = ai.reviewSummary;
      pr.aiIssues = ai.issues;
      pr.comments = ai.comments;
      pr.updatedAt = job.updatedAt;
      return;
    }

    if (job.state === "failed") {
      pr.status = "analyzing";
      pr.reviewSummary = job.error ? `Analysis failed: ${job.error}` : "Analysis failed (mock).";
      pr.aiIssues = pr.aiIssues.length ? pr.aiIssues : ["Worker failed to complete analysis."];
      pr.updatedAt = job.updatedAt;
      return;
    }
  }

  function ensurePRExists(repoId: number, prNumber: number): PullRequestDetail {
    const existing = seedPRs.find((p) => p.repoId === repoId && p.prNumber === prNumber);
    if (existing) return existing;

    const repo = repositories.find((r) => r.id === repoId);
    if (!repo) {
      throw new Error(`Unknown repoId: ${repoId}`);
    }
    const pr = makeBasePR(repo, prNumber);
    // Mark it as newly created and waiting.
    pr.status = "pending";
    pr.reviewSummary = "Queued for risk analysis (mock).";
    pr.updatedAt = isoNow();
    seedPRs.unshift(pr);
    return pr;
  }

  function enqueueMockJob(repositoryId: number, prNumber: number) {
    const pr = ensurePRExists(repositoryId, prNumber);
    const jobId = pr.id;
    const now = isoNow();

    const existingJob = jobs.get(jobId);
    if (existingJob && (existingJob.state === "waiting" || existingJob.state === "active")) {
      return { jobId, prId: pr.id };
    }

    const job: QueueJob = {
  id: jobId,
  name: `pr-${prNumber}`,
  data: {},
  progress: 0,
  timestamp: Date.now(),

  jobId,
  repositoryId,
  prNumber,
  state: "waiting",
  attemptsMade: 0,
  createdAt: now,
  updatedAt: now,
};
    jobs.set(jobId, job);
    syncPRWithJob(pr, job);

    // Keep the "worker alive" heartbeat fresh.
    worker.lastHeartbeatAt = now;

    // waiting -> active
    const activeDelayMs = randomInt(800, 1400);
    setTimeout(() => {
      const current = jobs.get(jobId);
      if (!current) return;
      if (current.state !== "waiting") return;

      const updated: QueueJob = {
        ...current,
        state: "active",
        attemptsMade: current.attemptsMade + 1,
        updatedAt: isoNow(),
      };
      jobs.set(jobId, updated);
      syncPRWithJob(pr, updated);
      worker.lastHeartbeatAt = isoNow();
    }, activeDelayMs);

    // active -> completed/failed
    const completeDelayMs = randomInt(2600, 4200);
    setTimeout(() => {
      const current = jobs.get(jobId);
      if (!current) return;
      if (current.state !== "active") return;

      const shouldFail = Math.random() < 0.12;
      const updated: QueueJob = shouldFail
        ? {
            ...current,
            state: "failed",
            error: "Mock worker encountered an upstream timeout.",
            updatedAt: isoNow(),
          }
        : {
            ...current,
            state: "completed",
            updatedAt: isoNow(),
          };

      jobs.set(jobId, updated);
      syncPRWithJob(pr, updated);
      worker.lastHeartbeatAt = isoNow();
    }, completeDelayMs);

    return { jobId, prId: pr.id };
  }

  function simulateWebhookForNewPR(input: { repoId: number; prNumber: number }) {
    return enqueueMockJob(input.repoId, input.prNumber);
  }

  return {
    repositories,
    getPRsSnapshot,
    getPRDetailById,
    getQueueSnapshot,
    simulateWebhookForNewPR,
    // Expose for tests/debugging
    __debug: { jobs, seedPRs },
  };
}

function getStore() {
  if (!globalThis.__AI_PR_RISK_MOCK_STORE__) {
    globalThis.__AI_PR_RISK_MOCK_STORE__ = createMockStore();
  }
  return globalThis.__AI_PR_RISK_MOCK_STORE__;
}

export function getMockRepositories(): ConnectedRepository[] {
  return getStore().repositories;
}

export function getMockPRs(): PullRequestSummary[] {
  return getStore().getPRsSnapshot();
}

export function getMockPRDetail(id: string): PullRequestDetail | undefined {
  return getStore().getPRDetailById(id);
}

export function getMockQueueSnapshot(): QueueSnapshot {
  return getStore().getQueueSnapshot();
}

export function simulateMockWebhookNewPR(input: { repoId: number; prNumber: number }) {
  return getStore().simulateWebhookForNewPR(input);
}

