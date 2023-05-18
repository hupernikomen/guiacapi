-- AlterTable
ALTER TABLE "categorias" ADD COLUMN     "subcategoria" TEXT[];

-- AlterTable
ALTER TABLE "produtos" ADD COLUMN     "cod" TEXT DEFAULT '';
