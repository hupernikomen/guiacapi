/*
  Warnings:

  - You are about to drop the column `profissoesID` on the `profissionais` table. All the data in the column will be lost.
  - You are about to drop the `servicos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "profissionais" DROP CONSTRAINT "profissionais_profissoesID_fkey";

-- AlterTable
ALTER TABLE "profissionais" DROP COLUMN "profissoesID",
ADD COLUMN     "profissaoID" TEXT;

-- DropTable
DROP TABLE "servicos";

-- CreateTable
CREATE TABLE "profissoes" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "avatar" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "profissoes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "profissionais" ADD CONSTRAINT "profissionais_profissaoID_fkey" FOREIGN KEY ("profissaoID") REFERENCES "profissoes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
