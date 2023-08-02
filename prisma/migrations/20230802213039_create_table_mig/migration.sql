-- CreateTable
CREATE TABLE "subcategorias" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "categoriaID" TEXT NOT NULL,

    CONSTRAINT "subcategorias_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "subcategorias" ADD CONSTRAINT "subcategorias_categoriaID_fkey" FOREIGN KEY ("categoriaID") REFERENCES "categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
