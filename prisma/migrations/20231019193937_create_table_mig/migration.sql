/*
  Warnings:

  - You are about to drop the column `status` on the `banners` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "banners" DROP COLUMN "status",
ALTER COLUMN "global" DROP DEFAULT;
