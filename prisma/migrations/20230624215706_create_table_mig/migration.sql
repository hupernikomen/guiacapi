-- DropForeignKey
ALTER TABLE "profissionais" DROP CONSTRAINT "profissionais_servicoID_fkey";

-- DropForeignKey
ALTER TABLE "profissionais" DROP CONSTRAINT "profissionais_usuarioID_fkey";

-- AlterTable
ALTER TABLE "profissionais" ALTER COLUMN "whatsapp" DROP NOT NULL,
ALTER COLUMN "endereco" DROP NOT NULL,
ALTER COLUMN "servicoID" DROP NOT NULL,
ALTER COLUMN "usuarioID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "profissionais" ADD CONSTRAINT "profissionais_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profissionais" ADD CONSTRAINT "profissionais_servicoID_fkey" FOREIGN KEY ("servicoID") REFERENCES "servicos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
