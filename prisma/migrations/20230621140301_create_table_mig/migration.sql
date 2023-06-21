-- DropForeignKey
ALTER TABLE "profissionais" DROP CONSTRAINT "profissionais_regiaoID_fkey";

-- AlterTable
ALTER TABLE "profissionais" ALTER COLUMN "regiaoID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "profissionais" ADD CONSTRAINT "profissionais_regiaoID_fkey" FOREIGN KEY ("regiaoID") REFERENCES "regioes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
