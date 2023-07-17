/*
  Warnings:

  - You are about to drop the column `profissionalId` on the `albuns` table. All the data in the column will be lost.
  - Added the required column `profissionalID` to the `albuns` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "albuns" DROP CONSTRAINT "albuns_profissionalId_fkey";

-- AlterTable
ALTER TABLE "albuns" DROP COLUMN "profissionalId",
ADD COLUMN     "profissionalID" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "albuns" ADD CONSTRAINT "albuns_profissionalID_fkey" FOREIGN KEY ("profissionalID") REFERENCES "profissionais"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
