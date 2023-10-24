/*
  Warnings:

  - You are about to drop the `people` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "people" DROP CONSTRAINT "people_professionID_fkey";

-- DropForeignKey
ALTER TABLE "people" DROP CONSTRAINT "people_userID_fkey";

-- DropForeignKey
ALTER TABLE "portfolios" DROP CONSTRAINT "portfolios_personID_fkey";

-- AlterTable
ALTER TABLE "stores" ADD COLUMN     "type" TEXT DEFAULT 'store';

-- DropTable
DROP TABLE "people";

-- CreateTable
CREATE TABLE "persons" (
    "id" TEXT NOT NULL,
    "avatar" JSONB,
    "name" TEXT,
    "district" TEXT,
    "address" TEXT,
    "bio" TEXT,
    "services" TEXT[],
    "professionID" TEXT,
    "userID" TEXT NOT NULL,
    "type" TEXT DEFAULT 'person',
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "persons_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "persons" ADD CONSTRAINT "persons_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "persons" ADD CONSTRAINT "persons_professionID_fkey" FOREIGN KEY ("professionID") REFERENCES "professions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portfolios" ADD CONSTRAINT "portfolios_personID_fkey" FOREIGN KEY ("personID") REFERENCES "persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
