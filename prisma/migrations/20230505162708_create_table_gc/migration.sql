/*
  Warnings:

  - You are about to drop the column `servico` on the `servicos` table. All the data in the column will be lost.
  - Added the required column `nomeServico` to the `servicos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "servicos" DROP COLUMN "servico",
ADD COLUMN     "nomeServico" TEXT NOT NULL;
