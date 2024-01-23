/*
  Warnings:

  - You are about to drop the column `category` on the `foods` table. All the data in the column will be lost.
  - You are about to drop the `brands` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryFoodID` to the `foods` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "brands" DROP CONSTRAINT "brands_userID_fkey";

-- AlterTable
ALTER TABLE "foods" DROP COLUMN "category",
ADD COLUMN     "categoryFoodID" TEXT NOT NULL;

-- DropTable
DROP TABLE "brands";

-- CreateTable
CREATE TABLE "categoriesFoods" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "categoriesFoods_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "foods" ADD CONSTRAINT "foods_categoryFoodID_fkey" FOREIGN KEY ("categoryFoodID") REFERENCES "categoriesFoods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
