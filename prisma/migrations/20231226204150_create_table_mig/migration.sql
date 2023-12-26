/*
  Warnings:

  - You are about to drop the column `userID` on the `paymentsBanners` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "paymentsBanners" DROP CONSTRAINT "paymentsBanners_userID_fkey";

-- AlterTable
ALTER TABLE "paymentsBanners" DROP COLUMN "userID";

-- AddForeignKey
ALTER TABLE "paymentsBanners" ADD CONSTRAINT "paymentsBanners_bannerID_fkey" FOREIGN KEY ("bannerID") REFERENCES "banners"("id") ON DELETE SET NULL ON UPDATE CASCADE;
