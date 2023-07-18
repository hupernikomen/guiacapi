/*
  Warnings:

  - Changed the type of `imagem` on the `albuns` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "albuns" DROP COLUMN "imagem",
ADD COLUMN     "imagem" JSONB NOT NULL;
