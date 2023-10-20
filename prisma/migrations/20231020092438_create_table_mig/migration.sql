/*
  Warnings:

  - You are about to drop the column `paymentOfID` on the `payments` table. All the data in the column will be lost.
  - Added the required column `paymentOf` to the `payments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "payments" DROP COLUMN "paymentOfID",
ADD COLUMN     "paymentOf" TEXT NOT NULL;
