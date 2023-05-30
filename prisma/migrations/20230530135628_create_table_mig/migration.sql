-- DropForeignKey
ALTER TABLE "lojas" DROP CONSTRAINT "lojas_temaID_fkey";

-- AlterTable
ALTER TABLE "lojas" ALTER COLUMN "temaID" DROP NOT NULL,
ALTER COLUMN "temaID" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "lojas" ADD CONSTRAINT "lojas_temaID_fkey" FOREIGN KEY ("temaID") REFERENCES "temas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
