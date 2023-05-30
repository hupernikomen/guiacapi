/*
  Warnings:

  - You are about to drop the column `whatsapp` on the `lojas` table. All the data in the column will be lost.
  - You are about to drop the column `cor` on the `produtos` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[whatsapp]` on the table `profissionais` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[whatsapp]` on the table `vendedores` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `avatar` to the `vendedores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "lojas" DROP COLUMN "whatsapp";

-- AlterTable
ALTER TABLE "produtos" DROP COLUMN "cor",
ALTER COLUMN "cod" DROP DEFAULT,
ALTER COLUMN "nome" DROP DEFAULT,
ALTER COLUMN "descricao" DROP DEFAULT,
ALTER COLUMN "preco" DROP DEFAULT,
ALTER COLUMN "oferta" DROP DEFAULT;

-- AlterTable
ALTER TABLE "vendedores" ADD COLUMN     "avatar" JSONB NOT NULL,
ALTER COLUMN "nome" DROP DEFAULT,
ALTER COLUMN "whatsapp" DROP DEFAULT,
ALTER COLUMN "setor" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "profissionais_whatsapp_key" ON "profissionais"("whatsapp");

-- CreateIndex
CREATE UNIQUE INDEX "vendedores_whatsapp_key" ON "vendedores"("whatsapp");
