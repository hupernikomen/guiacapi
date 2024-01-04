/*
  Warnings:

  - You are about to drop the `foods` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `menus` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "foods" DROP CONSTRAINT "foods_userID_fkey";

-- DropForeignKey
ALTER TABLE "menus" DROP CONSTRAINT "menus_foodID_fkey";

-- DropTable
DROP TABLE "foods";

-- DropTable
DROP TABLE "menus";
