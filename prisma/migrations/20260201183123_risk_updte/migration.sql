/*
  Warnings:

  - You are about to drop the column `hasDependencyRish` on the `PullRequestRisk` table. All the data in the column will be lost.
  - Added the required column `hasDependencyRisk` to the `PullRequestRisk` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PullRequestRisk" DROP COLUMN "hasDependencyRish",
ADD COLUMN     "hasDependencyRisk" BOOLEAN NOT NULL;
