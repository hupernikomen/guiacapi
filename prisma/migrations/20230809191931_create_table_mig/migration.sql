/*
  Warnings:

  - You are about to drop the column `avatar` on the `profissoes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "profissoes" DROP COLUMN "avatar";

-- AlterTable
ALTER TABLE "usuarios" ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;
