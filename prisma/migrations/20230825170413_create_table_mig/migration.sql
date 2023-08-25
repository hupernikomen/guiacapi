/*
  Warnings:

  - You are about to drop the `Marca` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Marca";

-- CreateTable
CREATE TABLE "marcas" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "avatar" JSONB,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "marcas_pkey" PRIMARY KEY ("id")
);
