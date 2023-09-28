/*
  Warnings:

  - You are about to drop the column `company` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `gasstations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "gasstations" DROP CONSTRAINT "gasstations_userID_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "company";

-- DropTable
DROP TABLE "gasstations";

-- CreateTable
CREATE TABLE "fuelstations" (
    "id" TEXT NOT NULL,
    "avatar" JSONB,
    "name" TEXT,
    "table" JSONB,
    "previoustable" JSONB,
    "district" TEXT,
    "userID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "fuelstations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "fuelstations" ADD CONSTRAINT "fuelstations_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
