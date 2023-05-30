/*
  Warnings:

  - You are about to drop the column `ativo` on the `lojas` table. All the data in the column will be lost.
  - You are about to drop the column `logo` on the `lojas` table. All the data in the column will be lost.
  - The `entrega` column on the `lojas` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `avatar` to the `lojas` table without a default value. This is not possible if the table is not empty.
  - Made the column `regiaoID` on table `lojas` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "lojas" DROP CONSTRAINT "lojas_regiaoID_fkey";

-- AlterTable
ALTER TABLE "lojas" DROP COLUMN "ativo",
DROP COLUMN "logo",
ADD COLUMN     "avatar" JSONB NOT NULL,
ADD COLUMN     "statusGuia" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "nome" DROP DEFAULT,
ALTER COLUMN "whatsapp" DROP DEFAULT,
ALTER COLUMN "bio" DROP DEFAULT,
ALTER COLUMN "endereco" DROP DEFAULT,
ALTER COLUMN "bairro" DROP DEFAULT,
ALTER COLUMN "referencia" DROP DEFAULT,
DROP COLUMN "entrega",
ADD COLUMN     "entrega" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "regiaoID" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "lojas" ADD CONSTRAINT "lojas_regiaoID_fkey" FOREIGN KEY ("regiaoID") REFERENCES "regioes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
