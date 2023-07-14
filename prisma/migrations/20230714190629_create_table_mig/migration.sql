/*
  Warnings:

  - You are about to drop the column `uri` on the `banners` table. All the data in the column will be lost.
  - Added the required column `imagem` to the `banners` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "banners" DROP COLUMN "uri",
ADD COLUMN     "imagem" JSONB NOT NULL;
