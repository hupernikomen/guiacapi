/*
  Warnings:

  - You are about to drop the `fuelstations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `persons` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `professions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "fuelstations" DROP CONSTRAINT "fuelstations_userID_fkey";

-- DropForeignKey
ALTER TABLE "persons" DROP CONSTRAINT "persons_professionID_fkey";

-- DropForeignKey
ALTER TABLE "persons" DROP CONSTRAINT "persons_userID_fkey";

-- DropTable
DROP TABLE "fuelstations";

-- DropTable
DROP TABLE "persons";

-- DropTable
DROP TABLE "professions";
