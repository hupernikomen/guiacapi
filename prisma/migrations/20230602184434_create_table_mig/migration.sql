-- AlterTable
ALTER TABLE "lojas" ADD COLUMN     "campanhaId" TEXT;

-- AlterTable
ALTER TABLE "produtos" ADD COLUMN     "campanhaID" TEXT;

-- CreateTable
CREATE TABLE "campanhas" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "tema" TEXT NOT NULL,

    CONSTRAINT "campanhas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "lojas" ADD CONSTRAINT "lojas_campanhaId_fkey" FOREIGN KEY ("campanhaId") REFERENCES "campanhas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produtos" ADD CONSTRAINT "produtos_campanhaID_fkey" FOREIGN KEY ("campanhaID") REFERENCES "campanhas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
