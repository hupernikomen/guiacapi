/*
  Warnings:

  - Made the column `whatsapp` on table `contatos` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "contatos" ALTER COLUMN "whatsapp" SET NOT NULL;

-- CreateTable
CREATE TABLE "planos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "oferta" TEXT NOT NULL,
    "pacote" TEXT[],
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "planos_pkey" PRIMARY KEY ("id")
);
