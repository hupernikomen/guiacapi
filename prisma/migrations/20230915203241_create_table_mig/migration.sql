/*
  Warnings:

  - You are about to drop the column `package` on the `prices` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "prices" DROP COLUMN "package",
ADD COLUMN     "advantage" TEXT[];
