/*
  Warnings:

  - You are about to drop the column `campanhaID` on the `lojas` table. All the data in the column will be lost.
  - You are about to drop the column `latlng` on the `lojas` table. All the data in the column will be lost.
  - You are about to drop the column `status_guia` on the `lojas` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `lojas` table. All the data in the column will be lost.
  - You are about to drop the column `latlng` on the `postos` table. All the data in the column will be lost.
  - You are about to drop the column `status_guia` on the `postos` table. All the data in the column will be lost.
  - You are about to drop the column `whatsapp` on the `postos` table. All the data in the column will be lost.
  - You are about to drop the column `cod` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `latlng` on the `profissionais` table. All the data in the column will be lost.
  - You are about to drop the column `regiaoID` on the `profissionais` table. All the data in the column will be lost.
  - You are about to drop the column `servicoID` on the `profissionais` table. All the data in the column will be lost.
  - You are about to drop the column `status_guia` on the `profissionais` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `profissionais` table. All the data in the column will be lost.
  - You are about to drop the column `whatsapp` on the `profissionais` table. All the data in the column will be lost.
  - You are about to drop the column `conta` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `usuario` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the `vendedores` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `usuarios` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "lojas" DROP CONSTRAINT "lojas_campanhaID_fkey";

-- DropForeignKey
ALTER TABLE "profissionais" DROP CONSTRAINT "profissionais_regiaoID_fkey";

-- DropForeignKey
ALTER TABLE "profissionais" DROP CONSTRAINT "profissionais_servicoID_fkey";

-- DropForeignKey
ALTER TABLE "vendedores" DROP CONSTRAINT "vendedores_lojaID_fkey";

-- DropIndex
DROP INDEX "profissionais_whatsapp_key";

-- DropIndex
DROP INDEX "usuarios_usuario_key";

-- AlterTable
ALTER TABLE "lojas" DROP COLUMN "campanhaID",
DROP COLUMN "latlng",
DROP COLUMN "status_guia",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "postos" DROP COLUMN "latlng",
DROP COLUMN "status_guia",
DROP COLUMN "whatsapp";

-- AlterTable
ALTER TABLE "produtos" DROP COLUMN "cod",
ADD COLUMN     "codigo" TEXT;

-- AlterTable
ALTER TABLE "profissionais" DROP COLUMN "latlng",
DROP COLUMN "regiaoID",
DROP COLUMN "servicoID",
DROP COLUMN "status_guia",
DROP COLUMN "updatedAt",
DROP COLUMN "whatsapp",
ADD COLUMN     "profissoesID" TEXT;

-- AlterTable
ALTER TABLE "usuarios" DROP COLUMN "conta",
DROP COLUMN "usuario",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "tipo" TEXT NOT NULL;

-- DropTable
DROP TABLE "vendedores";

-- CreateTable
CREATE TABLE "contatos" (
    "id" TEXT NOT NULL,
    "nome" TEXT,
    "avatar" JSONB,
    "whatsapp" TEXT,
    "horario" JSONB,
    "usuarioID" TEXT,

    CONSTRAINT "contatos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mapas" (
    "id" TEXT NOT NULL,
    "latlng" JSONB,
    "usuarioID" TEXT,

    CONSTRAINT "mapas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- AddForeignKey
ALTER TABLE "profissionais" ADD CONSTRAINT "profissionais_profissoesID_fkey" FOREIGN KEY ("profissoesID") REFERENCES "servicos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contatos" ADD CONSTRAINT "contatos_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mapas" ADD CONSTRAINT "mapas_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;
