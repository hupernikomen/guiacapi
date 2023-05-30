-- DropForeignKey
ALTER TABLE "lojas" DROP CONSTRAINT "lojas_regiaoID_fkey";

-- AlterTable
ALTER TABLE "lojas" ALTER COLUMN "regiaoID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "lojas" ADD CONSTRAINT "lojas_regiaoID_fkey" FOREIGN KEY ("regiaoID") REFERENCES "regioes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
