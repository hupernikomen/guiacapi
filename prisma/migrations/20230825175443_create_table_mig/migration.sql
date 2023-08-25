/*
  Warnings:

  - The primary key for the `marcas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `marcas` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "marcas" DROP CONSTRAINT "marcas_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "marcas_pkey" PRIMARY KEY ("id");
