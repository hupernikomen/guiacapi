/*
  Warnings:

  - A unique constraint covering the columns `[paymentID]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "paymentID" TEXT;

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "expiration" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_paymentID_key" ON "users"("paymentID");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_paymentID_fkey" FOREIGN KEY ("paymentID") REFERENCES "Payment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
