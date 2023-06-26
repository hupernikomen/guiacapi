/*
  Warnings:

  - You are about to drop the column `contaID` on the `lojas` table. All the data in the column will be lost.
  - You are about to drop the column `contaID` on the `postos` table. All the data in the column will be lost.
  - You are about to drop the column `contaID` on the `profissionais` table. All the data in the column will be lost.
  - You are about to drop the `contas` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `usuarioID` to the `lojas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioID` to the `postos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioID` to the `profissionais` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "contas" DROP CONSTRAINT "contas_regiaoID_fkey";

-- DropForeignKey
ALTER TABLE "lojas" DROP CONSTRAINT "lojas_contaID_fkey";

-- DropForeignKey
ALTER TABLE "postos" DROP CONSTRAINT "postos_contaID_fkey";

-- DropForeignKey
ALTER TABLE "profissionais" DROP CONSTRAINT "profissionais_contaID_fkey";

-- AlterTable
ALTER TABLE "lojas" DROP COLUMN "contaID",
ADD COLUMN     "usuarioID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "postos" DROP COLUMN "contaID",
ADD COLUMN     "usuarioID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "profissionais" DROP COLUMN "contaID",
ADD COLUMN     "usuarioID" TEXT NOT NULL;

-- DropTable
DROP TABLE "contas";

-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "conta" TEXT NOT NULL,
    "usuario" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "regiaoID" TEXT NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_usuario_key" ON "usuarios"("usuario");

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_regiaoID_fkey" FOREIGN KEY ("regiaoID") REFERENCES "regioes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postos" ADD CONSTRAINT "postos_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profissionais" ADD CONSTRAINT "profissionais_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lojas" ADD CONSTRAINT "lojas_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
