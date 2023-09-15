/*
  Warnings:

  - You are about to drop the column `imagem` on the `banners` table. All the data in the column will be lost.
  - You are about to drop the column `link` on the `banners` table. All the data in the column will be lost.
  - You are about to drop the column `params` on the `banners` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioID` on the `banners` table. All the data in the column will be lost.
  - You are about to drop the column `imagem` on the `portfolios` table. All the data in the column will be lost.
  - You are about to drop the column `profissionalID` on the `portfolios` table. All the data in the column will be lost.
  - You are about to drop the `campanhas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `categorias` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `contatos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `lojas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mapas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `marcas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `planos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `postos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `produtos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `profissionais` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `profissoes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `regioes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subcategorias` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usuarios` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `image` to the `banners` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paramsID` to the `banners` table without a default value. This is not possible if the table is not empty.
  - Added the required column `route` to the `banners` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `portfolios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personID` to the `portfolios` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "banners" DROP CONSTRAINT "banners_usuarioID_fkey";

-- DropForeignKey
ALTER TABLE "contatos" DROP CONSTRAINT "contatos_usuarioID_fkey";

-- DropForeignKey
ALTER TABLE "lojas" DROP CONSTRAINT "lojas_usuarioID_fkey";

-- DropForeignKey
ALTER TABLE "mapas" DROP CONSTRAINT "mapas_usuarioID_fkey";

-- DropForeignKey
ALTER TABLE "portfolios" DROP CONSTRAINT "portfolios_profissionalID_fkey";

-- DropForeignKey
ALTER TABLE "postos" DROP CONSTRAINT "postos_usuarioID_fkey";

-- DropForeignKey
ALTER TABLE "produtos" DROP CONSTRAINT "produtos_campanhaID_fkey";

-- DropForeignKey
ALTER TABLE "produtos" DROP CONSTRAINT "produtos_categoriaID_fkey";

-- DropForeignKey
ALTER TABLE "produtos" DROP CONSTRAINT "produtos_lojaID_fkey";

-- DropForeignKey
ALTER TABLE "produtos" DROP CONSTRAINT "produtos_subcategoriaID_fkey";

-- DropForeignKey
ALTER TABLE "profissionais" DROP CONSTRAINT "profissionais_profissaoID_fkey";

-- DropForeignKey
ALTER TABLE "profissionais" DROP CONSTRAINT "profissionais_usuarioID_fkey";

-- DropForeignKey
ALTER TABLE "subcategorias" DROP CONSTRAINT "subcategorias_categoriaID_fkey";

-- DropForeignKey
ALTER TABLE "usuarios" DROP CONSTRAINT "usuarios_regiaoID_fkey";

-- AlterTable
ALTER TABLE "banners" DROP COLUMN "imagem",
DROP COLUMN "link",
DROP COLUMN "params",
DROP COLUMN "usuarioID",
ADD COLUMN     "image" JSONB NOT NULL,
ADD COLUMN     "paramsID" TEXT NOT NULL,
ADD COLUMN     "route" TEXT NOT NULL,
ADD COLUMN     "userID" TEXT;

-- AlterTable
ALTER TABLE "portfolios" DROP COLUMN "imagem",
DROP COLUMN "profissionalID",
ADD COLUMN     "image" JSONB NOT NULL,
ADD COLUMN     "personID" TEXT NOT NULL;

-- DropTable
DROP TABLE "campanhas";

-- DropTable
DROP TABLE "categorias";

-- DropTable
DROP TABLE "contatos";

-- DropTable
DROP TABLE "lojas";

-- DropTable
DROP TABLE "mapas";

-- DropTable
DROP TABLE "marcas";

-- DropTable
DROP TABLE "planos";

-- DropTable
DROP TABLE "postos";

-- DropTable
DROP TABLE "produtos";

-- DropTable
DROP TABLE "profissionais";

-- DropTable
DROP TABLE "profissoes";

-- DropTable
DROP TABLE "regioes";

-- DropTable
DROP TABLE "subcategorias";

-- DropTable
DROP TABLE "usuarios";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "company" TEXT,
    "regionID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "maps" (
    "id" TEXT NOT NULL,
    "latlng" JSONB,
    "userID" TEXT,

    CONSTRAINT "maps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "regions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "regions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contacts" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "avatar" JSONB,
    "whatsapp" TEXT NOT NULL,
    "time" JSONB,
    "sector" TEXT,
    "saturday" BOOLEAN,
    "sunday" BOOLEAN,
    "away" BOOLEAN,
    "userID" TEXT,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stores" (
    "id" TEXT NOT NULL,
    "avatar" JSONB,
    "name" TEXT,
    "address" TEXT,
    "delivery" BOOLEAN DEFAULT false,
    "district" TEXT,
    "bio" TEXT,
    "reference" TEXT,
    "userID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "stores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "brands" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatar" JSONB,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "brands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "reference" TEXT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "off" DOUBLE PRECISION DEFAULT 0,
    "size" TEXT[],
    "image" JSONB[],
    "color" TEXT[],
    "storeID" TEXT NOT NULL,
    "categoryID" TEXT NOT NULL,
    "subcategoryID" TEXT,
    "campaignID" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subcategories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "categoryID" TEXT NOT NULL,

    CONSTRAINT "subcategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "campaigns" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "theme" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "campaigns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "people" (
    "id" TEXT NOT NULL,
    "avatar" JSONB,
    "name" TEXT,
    "district" TEXT,
    "address" TEXT,
    "bio" TEXT,
    "services" TEXT[],
    "professionID" TEXT,
    "userID" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "people_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "professions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gasstations" (
    "id" TEXT NOT NULL,
    "avatar" JSONB,
    "name" TEXT,
    "table" JSONB,
    "previoustable" JSONB,
    "district" TEXT,
    "userID" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "gasstations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prices" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "off" TEXT NOT NULL,
    "package" TEXT[],
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "prices_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_user_key" ON "users"("user");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_regionID_fkey" FOREIGN KEY ("regionID") REFERENCES "regions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "maps" ADD CONSTRAINT "maps_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "banners" ADD CONSTRAINT "banners_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stores" ADD CONSTRAINT "stores_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_storeID_fkey" FOREIGN KEY ("storeID") REFERENCES "stores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_subcategoryID_fkey" FOREIGN KEY ("subcategoryID") REFERENCES "subcategories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_campaignID_fkey" FOREIGN KEY ("campaignID") REFERENCES "campaigns"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subcategories" ADD CONSTRAINT "subcategories_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "people" ADD CONSTRAINT "people_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "people" ADD CONSTRAINT "people_professionID_fkey" FOREIGN KEY ("professionID") REFERENCES "professions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portfolios" ADD CONSTRAINT "portfolios_personID_fkey" FOREIGN KEY ("personID") REFERENCES "people"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gasstations" ADD CONSTRAINT "gasstations_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
