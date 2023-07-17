/*
  Warnings:

  - You are about to drop the column `album` on the `profissionais` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "profissionais" DROP COLUMN "album";

-- CreateTable
CREATE TABLE "albuns" (
    "id" TEXT NOT NULL,
    "imagem" JSONB NOT NULL,
    "profissionalId" TEXT NOT NULL,

    CONSTRAINT "albuns_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "albuns" ADD CONSTRAINT "albuns_profissionalId_fkey" FOREIGN KEY ("profissionalId") REFERENCES "profissionais"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
