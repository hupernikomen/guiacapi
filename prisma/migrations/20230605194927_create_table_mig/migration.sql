/*
  Warnings:

  - The `oferta` column on the `produtos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `preco` on the `produtos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "produtos" DROP COLUMN "preco",
ADD COLUMN     "preco" DOUBLE PRECISION NOT NULL,
DROP COLUMN "oferta",
ADD COLUMN     "oferta" DOUBLE PRECISION;
