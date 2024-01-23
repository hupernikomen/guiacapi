-- DropForeignKey
ALTER TABLE "foods" DROP CONSTRAINT "foods_categoryFoodID_fkey";

-- AlterTable
ALTER TABLE "foods" ALTER COLUMN "categoryFoodID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "foods" ADD CONSTRAINT "foods_categoryFoodID_fkey" FOREIGN KEY ("categoryFoodID") REFERENCES "categoriesFoods"("id") ON DELETE SET NULL ON UPDATE CASCADE;
