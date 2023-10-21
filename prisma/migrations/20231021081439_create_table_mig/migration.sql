/*
  Warnings:

  - You are about to drop the column `bannerID` on the `paymentsBanners` table. All the data in the column will be lost.
  - Added the required column `userID` to the `paymentsBanners` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "paymentsBanners" DROP CONSTRAINT "paymentsBanners_bannerID_fkey";

-- AlterTable
ALTER TABLE "paymentsBanners" DROP COLUMN "bannerID",
ADD COLUMN     "userID" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "paymentsBanners" ADD CONSTRAINT "paymentsBanners_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
