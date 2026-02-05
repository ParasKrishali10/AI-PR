-- CreateTable
CREATE TABLE "PullRequestRisk" (
    "id" TEXT NOT NULL,
    "pullRequestId" TEXT NOT NULL,
    "hasDependencyRish" BOOLEAN NOT NULL,
    "hasAuthRisk" BOOLEAN NOT NULL,
    "hasMalciousRisk" BOOLEAN NOT NULL,
    "malciousReasons" TEXT[],
    "affectedFiles" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PullRequestRisk_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PullRequestRisk_pullRequestId_key" ON "PullRequestRisk"("pullRequestId");

-- AddForeignKey
ALTER TABLE "PullRequestRisk" ADD CONSTRAINT "PullRequestRisk_pullRequestId_fkey" FOREIGN KEY ("pullRequestId") REFERENCES "PullRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
