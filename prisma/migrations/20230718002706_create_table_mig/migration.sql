/*
  Warnings:

  - The `imagem` column on the `albuns` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "albuns" DROP COLUMN "imagem",
ADD COLUMN     "imagem" JSONB[];
