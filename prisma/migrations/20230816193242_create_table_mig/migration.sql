-- CreateTable
CREATE TABLE "portfolios" (
    "id" TEXT NOT NULL,
    "imagem" JSONB NOT NULL,
    "profissionalID" TEXT NOT NULL,

    CONSTRAINT "portfolios_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "portfolios" ADD CONSTRAINT "portfolios_profissionalID_fkey" FOREIGN KEY ("profissionalID") REFERENCES "profissionais"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
