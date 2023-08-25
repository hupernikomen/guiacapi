/*
  Warnings:

  - Added the required column `nome` to the `Marca` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Marca" ADD COLUMN     "nome" TEXT NOT NULL;
