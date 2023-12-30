/*
  Warnings:

  - You are about to drop the column `personID` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `storeID` on the `jobs` table. All the data in the column will be lost.
  - Added the required column `userID` to the `jobs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "jobs" DROP CONSTRAINT "jobs_personID_fkey";

-- DropForeignKey
ALTER TABLE "jobs" DROP CONSTRAINT "jobs_storeID_fkey";

-- AlterTable
ALTER TABLE "jobs" DROP COLUMN "personID",
DROP COLUMN "storeID",
ADD COLUMN     "userID" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
