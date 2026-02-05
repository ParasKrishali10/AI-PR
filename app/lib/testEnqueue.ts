import { enqueuePRRiskJob } from "./queue.ts"

await enqueuePRRiskJob({
  repositoryId: "repo_test",
  prNumber: 101,
})

console.log("✅ Test job sent")
process.exit(0)
