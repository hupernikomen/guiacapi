/*
  Warnings:

  - You are about to drop the column `createdAt` on the `banners` table. All the data in the column will be lost.
  - You are about to drop the column `paymentOf` on the `payments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "banners" DROP COLUMN "createdAt";

-- AlterTable
ALTER TABLE "payments" DROP COLUMN "paymentOf";

-- CreateTable
CREATE TABLE "paymentsBanners" (
    "id" TEXT NOT NULL,
    "expiration" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "bannerID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "paymentsBanners_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "paymentsBanners" ADD CONSTRAINT "paymentsBanners_bannerID_fkey" FOREIGN KEY ("bannerID") REFERENCES "banners"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
