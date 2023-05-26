/*
  Warnings:

  - You are about to drop the column `foto` on the `vendedores` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "vendedores" DROP COLUMN "foto",
ADD COLUMN     "setor" TEXT NOT NULL DEFAULT '';
