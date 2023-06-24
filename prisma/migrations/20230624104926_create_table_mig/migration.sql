-- AlterTable
ALTER TABLE "lojas" ADD COLUMN     "conta" TEXT;

-- AlterTable
ALTER TABLE "profissionais" ADD COLUMN     "conta" TEXT;

-- CreateTable
CREATE TABLE "postos" (
    "id" TEXT NOT NULL,
    "conta" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "tabela" JSONB,
    "latlng" JSONB,

    CONSTRAINT "postos_pkey" PRIMARY KEY ("id")
);
