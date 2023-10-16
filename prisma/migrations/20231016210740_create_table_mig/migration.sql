/*
  Warnings:

  - Added the required column `userID` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_paymentID_fkey";

-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "userID" TEXT NOT NULL,
ADD COLUMN     "value" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
