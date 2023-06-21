/*
  Warnings:

  - You are about to drop the column `avatar` on the `profissionais` table. All the data in the column will be lost.
  - You are about to drop the column `portfolio` on the `profissionais` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "profissionais" DROP COLUMN "avatar",
DROP COLUMN "portfolio";
