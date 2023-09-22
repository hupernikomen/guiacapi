-- AlterTable
ALTER TABLE "banners" ADD COLUMN     "regionID" TEXT;

-- AddForeignKey
ALTER TABLE "banners" ADD CONSTRAINT "banners_regionID_fkey" FOREIGN KEY ("regionID") REFERENCES "regions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
