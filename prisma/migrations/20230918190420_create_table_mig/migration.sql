/*
  Warnings:

  - Made the column `userID` on table `gasstations` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userID` on table `maps` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userID` on table `people` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "gasstations" DROP CONSTRAINT "gasstations_userID_fkey";

-- DropForeignKey
ALTER TABLE "maps" DROP CONSTRAINT "maps_userID_fkey";

-- DropForeignKey
ALTER TABLE "people" DROP CONSTRAINT "people_userID_fkey";

-- AlterTable
ALTER TABLE "gasstations" ALTER COLUMN "userID" SET NOT NULL;

-- AlterTable
ALTER TABLE "maps" ALTER COLUMN "userID" SET NOT NULL;

-- AlterTable
ALTER TABLE "people" ALTER COLUMN "userID" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "maps" ADD CONSTRAINT "maps_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "people" ADD CONSTRAINT "people_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gasstations" ADD CONSTRAINT "gasstations_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
