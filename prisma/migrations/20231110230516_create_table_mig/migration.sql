/*
  Warnings:

  - You are about to drop the column `expiration` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `expiration` on the `paymentsBanners` table. All the data in the column will be lost.
  - Added the required column `dataPayment` to the `payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataPayment` to the `paymentsBanners` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "payments" DROP COLUMN "expiration",
ADD COLUMN     "dataPayment" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "paymentsBanners" DROP COLUMN "expiration",
ADD COLUMN     "dataPayment" TEXT NOT NULL;
