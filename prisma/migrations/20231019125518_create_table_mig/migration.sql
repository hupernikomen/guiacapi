/*
  Warnings:

  - You are about to drop the column `adminID` on the `banners` table. All the data in the column will be lost.
  - You are about to drop the column `nDays` on the `banners` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "banners" DROP CONSTRAINT "banners_adminID_fkey";

-- AlterTable
ALTER TABLE "banners" DROP COLUMN "adminID",
DROP COLUMN "nDays",
ADD COLUMN     "global" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "payments" ADD COLUMN     "type" TEXT;
