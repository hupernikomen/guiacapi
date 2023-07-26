/*
  Warnings:

  - You are about to drop the `albuns` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "albuns" DROP CONSTRAINT "albuns_profissionalID_fkey";

-- DropTable
DROP TABLE "albuns";
