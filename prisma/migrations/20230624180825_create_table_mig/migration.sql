/*
  Warnings:

  - You are about to drop the column `campanhaId` on the `lojas` table. All the data in the column will be lost.
  - You are about to drop the `conta` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `contaID` to the `lojas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contaID` to the `postos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contaID` to the `profissionais` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "conta" DROP CONSTRAINT "conta_regiaoID_fkey";

-- DropForeignKey
ALTER TABLE "lojas" DROP CONSTRAINT "lojas_campanhaId_fkey";

-- AlterTable
ALTER TABLE "lojas" DROP COLUMN "campanhaId",
ADD COLUMN     "campanhaID" TEXT,
ADD COLUMN     "contaID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "postos" ADD COLUMN     "contaID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "profissionais" ADD COLUMN     "contaID" TEXT NOT NULL;

-- DropTable
DROP TABLE "conta";

-- CreateTable
CREATE TABLE "contas" (
    "id" TEXT NOT NULL,
    "conta" TEXT NOT NULL,
    "usuario" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "regiaoID" TEXT NOT NULL,

    CONSTRAINT "contas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "contas_usuario_key" ON "contas"("usuario");

-- AddForeignKey
ALTER TABLE "contas" ADD CONSTRAINT "contas_regiaoID_fkey" FOREIGN KEY ("regiaoID") REFERENCES "regioes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postos" ADD CONSTRAINT "postos_contaID_fkey" FOREIGN KEY ("contaID") REFERENCES "contas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profissionais" ADD CONSTRAINT "profissionais_contaID_fkey" FOREIGN KEY ("contaID") REFERENCES "contas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lojas" ADD CONSTRAINT "lojas_contaID_fkey" FOREIGN KEY ("contaID") REFERENCES "contas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lojas" ADD CONSTRAINT "lojas_campanhaID_fkey" FOREIGN KEY ("campanhaID") REFERENCES "campanhas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
