/*
  Warnings:

  - You are about to drop the column `comment` on the `PullRequest` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PullRequest" DROP COLUMN "comment";

-- AlterTable
ALTER TABLE "PullRequestRisk" ADD COLUMN     "comment" TEXT NOT NULL DEFAULT '';
