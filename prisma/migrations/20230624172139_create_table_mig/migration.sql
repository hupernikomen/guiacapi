/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `categorias` table. All the data in the column will be lost.
  - You are about to drop the column `conta` on the `lojas` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `lojas` table. All the data in the column will be lost.
  - You are about to drop the column `entrega` on the `lojas` table. All the data in the column will be lost.
  - You are about to drop the column `referencia` on the `lojas` table. All the data in the column will be lost.
  - You are about to drop the column `senha` on the `lojas` table. All the data in the column will be lost.
  - You are about to drop the column `statusGuia` on the `lojas` table. All the data in the column will be lost.
  - You are about to drop the column `temaID` on the `lojas` table. All the data in the column will be lost.
  - You are about to drop the column `conta` on the `postos` table. All the data in the column will be lost.
  - You are about to drop the column `aDomicilio` on the `profissionais` table. All the data in the column will be lost.
  - You are about to drop the column `conta` on the `profissionais` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `profissionais` table. All the data in the column will be lost.
  - You are about to drop the column `listaServicos` on the `profissionais` table. All the data in the column will be lost.
  - You are about to drop the column `portfolio` on the `profissionais` table. All the data in the column will be lost.
  - You are about to drop the column `statusGuia` on the `profissionais` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `regioes` table. All the data in the column will be lost.
  - You are about to drop the column `icone` on the `servicos` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `servicos` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `vendedores` table. All the data in the column will be lost.
  - You are about to drop the `temas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "lojas" DROP CONSTRAINT "lojas_temaID_fkey";

-- DropIndex
DROP INDEX "lojas_email_key";

-- DropIndex
DROP INDEX "profissionais_email_key";

-- AlterTable
ALTER TABLE "categorias" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "lojas" DROP COLUMN "conta",
DROP COLUMN "email",
DROP COLUMN "entrega",
DROP COLUMN "referencia",
DROP COLUMN "senha",
DROP COLUMN "statusGuia",
DROP COLUMN "temaID",
ADD COLUMN     "delivery" BOOLEAN DEFAULT false,
ADD COLUMN     "ponto_ref" TEXT,
ADD COLUMN     "status_guia" BOOLEAN DEFAULT false,
ADD COLUMN     "tema" JSONB;

-- AlterTable
ALTER TABLE "postos" DROP COLUMN "conta",
ADD COLUMN     "avatar" JSONB,
ADD COLUMN     "bairro" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "status_guia" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "whatsapp" TEXT;

-- AlterTable
ALTER TABLE "profissionais" DROP COLUMN "aDomicilio",
DROP COLUMN "conta",
DROP COLUMN "email",
DROP COLUMN "listaServicos",
DROP COLUMN "portfolio",
DROP COLUMN "statusGuia",
ADD COLUMN     "album" JSONB[],
ADD COLUMN     "bairro" TEXT,
ADD COLUMN     "latlng" JSONB,
ADD COLUMN     "lista_servicos" TEXT[],
ADD COLUMN     "status_guia" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "regioes" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "servicos" DROP COLUMN "icone",
DROP COLUMN "updatedAt",
ADD COLUMN     "avatar" TEXT;

-- AlterTable
ALTER TABLE "vendedores" DROP COLUMN "updatedAt";

-- DropTable
DROP TABLE "temas";

-- CreateTable
CREATE TABLE "conta" (
    "id" TEXT NOT NULL,
    "conta" TEXT NOT NULL,
    "usuario" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "conta_pkey" PRIMARY KEY ("id")
);
