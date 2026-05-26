import { enqueuePRRiskJob } from "./queue.ts"

await enqueuePRRiskJob({
  repositoryId: 1,
  prNumber: 101,
  userId:1
})
console.log("✅ Test job sent")
process.exit(0)
