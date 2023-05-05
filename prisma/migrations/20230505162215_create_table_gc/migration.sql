/*
  Warnings:

  - You are about to drop the column `imgServicos` on the `servicos` table. All the data in the column will be lost.
  - You are about to drop the column `tipoServico` on the `servicos` table. All the data in the column will be lost.
  - Added the required column `servico` to the `servicos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "servicos" DROP COLUMN "imgServicos",
DROP COLUMN "tipoServico",
ADD COLUMN     "arrPortfolio" JSONB[],
ADD COLUMN     "listaServicos" TEXT[],
ADD COLUMN     "servico" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "vendedores" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "foto" JSONB[],
    "lojaID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "vendedores_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "vendedores" ADD CONSTRAINT "vendedores_lojaID_fkey" FOREIGN KEY ("lojaID") REFERENCES "lojas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
