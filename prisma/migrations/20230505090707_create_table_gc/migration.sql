/*
  Warnings:

  - The `tamanho` column on the `produtos` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "produtos" DROP COLUMN "tamanho",
ADD COLUMN     "tamanho" TEXT[];
