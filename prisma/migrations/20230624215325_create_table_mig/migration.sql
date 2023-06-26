-- DropForeignKey
ALTER TABLE "postos" DROP CONSTRAINT "postos_usuarioID_fkey";

-- AlterTable
ALTER TABLE "postos" ALTER COLUMN "nome" DROP NOT NULL,
ALTER COLUMN "usuarioID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "postos" ADD CONSTRAINT "postos_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;
