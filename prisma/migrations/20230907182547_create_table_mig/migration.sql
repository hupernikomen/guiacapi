/*
  Warnings:

  - You are about to drop the column `id_rota` on the `banners` table. All the data in the column will be lost.
  - You are about to drop the column `rota` on the `banners` table. All the data in the column will be lost.
  - Added the required column `link` to the `banners` table without a default value. This is not possible if the table is not empty.
  - Added the required column `params` to the `banners` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "banners_lojaID_key";

-- AlterTable
ALTER TABLE "banners" DROP COLUMN "id_rota",
DROP COLUMN "rota",
ADD COLUMN     "link" TEXT NOT NULL,
ADD COLUMN     "params" JSONB NOT NULL,
ALTER COLUMN "status" SET DEFAULT true;

-- AlterTable
ALTER TABLE "produtos" ADD COLUMN     "cores" TEXT[];
