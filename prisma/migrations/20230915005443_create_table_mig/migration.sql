/*
  Warnings:

  - You are about to drop the column `lojaID` on the `banners` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "banners" DROP CONSTRAINT "banners_lojaID_fkey";

-- AlterTable
ALTER TABLE "banners" DROP COLUMN "lojaID",
ADD COLUMN     "usuarioID" TEXT;

-- AddForeignKey
ALTER TABLE "banners" ADD CONSTRAINT "banners_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;
