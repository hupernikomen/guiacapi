/*
  Warnings:

  - You are about to drop the column `paymentID` on the `users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "users_paymentID_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "paymentID";
