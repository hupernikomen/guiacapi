-- AlterTable
ALTER TABLE "banners" ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Marca" (
    "id" TEXT NOT NULL,
    "avatar" JSONB,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Marca_pkey" PRIMARY KEY ("id")
);
