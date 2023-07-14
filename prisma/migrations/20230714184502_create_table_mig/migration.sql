/*
  Warnings:

  - You are about to drop the `bannres` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "bannres" DROP CONSTRAINT "bannres_lojaID_fkey";

-- DropTable
DROP TABLE "bannres";

-- CreateTable
CREATE TABLE "banners" (
    "id" TEXT NOT NULL,
    "rota" TEXT NOT NULL,
    "id_rota" TEXT NOT NULL,
    "uri" TEXT NOT NULL,
    "lojaID" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "banners_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "banners_lojaID_key" ON "banners"("lojaID");

-- AddForeignKey
ALTER TABLE "banners" ADD CONSTRAINT "banners_lojaID_fkey" FOREIGN KEY ("lojaID") REFERENCES "lojas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
