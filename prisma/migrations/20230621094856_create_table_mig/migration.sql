/*
  Warnings:

  - You are about to drop the column `regiaoID` on the `servicos` table. All the data in the column will be lost.
  - Added the required column `regiaoID` to the `profissionais` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "servicos" DROP CONSTRAINT "servicos_regiaoID_fkey";

-- AlterTable
ALTER TABLE "profissionais" ADD COLUMN     "regiaoID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "servicos" DROP COLUMN "regiaoID";

-- AddForeignKey
ALTER TABLE "profissionais" ADD CONSTRAINT "profissionais_regiaoID_fkey" FOREIGN KEY ("regiaoID") REFERENCES "regioes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
