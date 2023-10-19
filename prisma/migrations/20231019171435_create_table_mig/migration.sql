/*
  Warnings:

  - You are about to drop the column `type` on the `payments` table. All the data in the column will be lost.
  - Added the required column `referenceID` to the `payments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "payments" DROP COLUMN "type",
ADD COLUMN     "referenceID" TEXT NOT NULL;
