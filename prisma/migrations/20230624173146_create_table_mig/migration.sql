/*
  Warnings:

  - You are about to drop the column `regiaoID` on the `lojas` table. All the data in the column will be lost.
  - Added the required column `regiaoID` to the `conta` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "lojas" DROP CONSTRAINT "lojas_regiaoID_fkey";

-- AlterTable
ALTER TABLE "conta" ADD COLUMN     "regiaoID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "lojas" DROP COLUMN "regiaoID";

-- AddForeignKey
ALTER TABLE "conta" ADD CONSTRAINT "conta_regiaoID_fkey" FOREIGN KEY ("regiaoID") REFERENCES "regioes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
