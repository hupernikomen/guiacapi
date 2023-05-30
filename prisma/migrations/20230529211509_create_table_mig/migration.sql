/*
  Warnings:

  - You are about to drop the column `arrPortfolio` on the `servicos` table. All the data in the column will be lost.
  - You are about to drop the column `ativo` on the `servicos` table. All the data in the column will be lost.
  - You are about to drop the column `bio` on the `servicos` table. All the data in the column will be lost.
  - You are about to drop the column `categoria` on the `servicos` table. All the data in the column will be lost.
  - You are about to drop the column `domicilio` on the `servicos` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `servicos` table. All the data in the column will be lost.
  - You are about to drop the column `endereco` on the `servicos` table. All the data in the column will be lost.
  - You are about to drop the column `foto` on the `servicos` table. All the data in the column will be lost.
  - You are about to drop the column `listaServicos` on the `servicos` table. All the data in the column will be lost.
  - You are about to drop the column `nomeServico` on the `servicos` table. All the data in the column will be lost.
  - You are about to drop the column `whatsapp` on the `servicos` table. All the data in the column will be lost.
  - Made the column `regiaoID` on table `servicos` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "servicos" DROP CONSTRAINT "servicos_regiaoID_fkey";

-- AlterTable
ALTER TABLE "servicos" DROP COLUMN "arrPortfolio",
DROP COLUMN "ativo",
DROP COLUMN "bio",
DROP COLUMN "categoria",
DROP COLUMN "domicilio",
DROP COLUMN "email",
DROP COLUMN "endereco",
DROP COLUMN "foto",
DROP COLUMN "listaServicos",
DROP COLUMN "nomeServico",
DROP COLUMN "whatsapp",
ALTER COLUMN "nome" DROP DEFAULT,
ALTER COLUMN "regiaoID" SET NOT NULL;

-- CreateTable
CREATE TABLE "profissionais" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "avatar" JSONB NOT NULL,
    "portfolio" JSONB[],
    "listaServicos" TEXT[],
    "whatsapp" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "aDomicilio" BOOLEAN NOT NULL DEFAULT false,
    "endereco" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "statusGuia" BOOLEAN NOT NULL DEFAULT false,
    "servicoID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "profissionais_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "profissionais_email_key" ON "profissionais"("email");

-- AddForeignKey
ALTER TABLE "servicos" ADD CONSTRAINT "servicos_regiaoID_fkey" FOREIGN KEY ("regiaoID") REFERENCES "regioes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profissionais" ADD CONSTRAINT "profissionais_servicoID_fkey" FOREIGN KEY ("servicoID") REFERENCES "servicos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
