/*
  Warnings:

  - You are about to drop the column `global` on the `banners` table. All the data in the column will be lost.
  - You are about to drop the column `referenceID` on the `payments` table. All the data in the column will be lost.
  - Made the column `userID` on table `banners` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `paymentOfID` to the `payments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "banners" DROP CONSTRAINT "banners_userID_fkey";

-- AlterTable
ALTER TABLE "banners" DROP COLUMN "global",
ALTER COLUMN "userID" SET NOT NULL;

-- AlterTable
ALTER TABLE "payments" DROP COLUMN "referenceID",
ADD COLUMN     "paymentOfID" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "banners" ADD CONSTRAINT "banners_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
