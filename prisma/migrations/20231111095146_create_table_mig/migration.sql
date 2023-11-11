/*
  Warnings:

  - You are about to drop the column `dataPayment` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `dataPayment` on the `paymentsBanners` table. All the data in the column will be lost.
  - Added the required column `datePayment` to the `payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `datePayment` to the `paymentsBanners` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "payments" DROP COLUMN "dataPayment",
ADD COLUMN     "datePayment" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "paymentsBanners" DROP COLUMN "dataPayment",
ADD COLUMN     "datePayment" TEXT NOT NULL;
