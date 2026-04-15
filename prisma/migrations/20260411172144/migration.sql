/*
  Warnings:

  - You are about to drop the column `enableMalciousRisk` on the `Settings` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Settings" DROP COLUMN "enableMalciousRisk",
ADD COLUMN     "enableMaliciousRisk" BOOLEAN NOT NULL DEFAULT true;
