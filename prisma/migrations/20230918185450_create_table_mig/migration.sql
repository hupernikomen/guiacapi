/*
  Warnings:

  - Made the column `userID` on table `banners` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "banners" DROP CONSTRAINT "banners_userID_fkey";

-- AlterTable
ALTER TABLE "banners" ALTER COLUMN "userID" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "banners" ADD CONSTRAINT "banners_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
