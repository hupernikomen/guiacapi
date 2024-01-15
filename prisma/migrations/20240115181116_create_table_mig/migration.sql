-- DropForeignKey
ALTER TABLE "services" DROP CONSTRAINT "services_categoryServiceID_fkey";

-- AlterTable
ALTER TABLE "services" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "district" DROP NOT NULL,
ALTER COLUMN "address" DROP NOT NULL,
ALTER COLUMN "bio" DROP NOT NULL,
ALTER COLUMN "categoryServiceID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_categoryServiceID_fkey" FOREIGN KEY ("categoryServiceID") REFERENCES "categoryServices"("id") ON DELETE SET NULL ON UPDATE CASCADE;
