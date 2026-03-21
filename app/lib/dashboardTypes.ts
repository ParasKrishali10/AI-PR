export type PRStatus = "pending" | "analyzing" | "completed";
export type JobState = "waiting" | "active" | "completed" | "failed";

export interface ConnectedRepository {
  id: number;
  owner: string;
  fullName: string;
  lastSyncAt: string; // ISO
}

export interface PRReviewComment {
  id: string;
  filePath: string;
  severity: "info" | "warning" | "critical";
  issue: string;
  suggestion: string;
  excerpt?: string;
  lineHint?: number;
}

export interface PRDiffFile {
  filePath: string;
  lines: Array<{
    type: "added" | "removed" | "context";
    content: string;
  }>;
}

export interface PullRequestSummary {
  id: string; // stable identifier used by the UI
  repoId: number;
  repoName: string;
  title: string;
  author: string;
  status: PRStatus;
  reviewSummary: string;
  updatedAt: string; // ISO
  createdAt: string; // ISO
  prNumber: number;
}

export interface PullRequestDetail extends PullRequestSummary {
  branch: string;
  diffFiles: PRDiffFile[];
  comments: PRReviewComment[];
  aiIssues: string[];
}

export interface QueueJob {
  jobId: string;
  repositoryId: number;
  prNumber: number;
  state: JobState;
  attemptsMade: number;
  createdAt: string; // ISO
  updatedAt: string; // ISO
  error?: string;
}

export interface QueueSnapshot {
  worker: {
    name: string;
    lastHeartbeatAt: string; // ISO
  };
  jobs: QueueJob[];
  counts: Record<JobState, number>;
}

