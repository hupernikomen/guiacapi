/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `lojas` will be added. If there are existing duplicate values, this will fail.
  - Made the column `regiaoID` on table `lojas` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "lojas" DROP CONSTRAINT "lojas_regiaoID_fkey";

-- AlterTable
ALTER TABLE "lojas" ALTER COLUMN "regiaoID" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "lojas_email_key" ON "lojas"("email");

-- AddForeignKey
ALTER TABLE "lojas" ADD CONSTRAINT "lojas_regiaoID_fkey" FOREIGN KEY ("regiaoID") REFERENCES "regioes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
