/*
  Warnings:

  - You are about to drop the column `regionID` on the `banners` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "banners" DROP CONSTRAINT "banners_regionID_fkey";

-- DropForeignKey
ALTER TABLE "banners" DROP CONSTRAINT "banners_userID_fkey";

-- AlterTable
ALTER TABLE "banners" DROP COLUMN "regionID",
ADD COLUMN     "adminID" TEXT,
ALTER COLUMN "userID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "banners" ADD CONSTRAINT "banners_adminID_fkey" FOREIGN KEY ("adminID") REFERENCES "admins"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "banners" ADD CONSTRAINT "banners_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
