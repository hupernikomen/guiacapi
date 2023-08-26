/*
  Warnings:

  - The primary key for the `marcas` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "marcas" DROP CONSTRAINT "marcas_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "marcas_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "marcas_id_seq";
