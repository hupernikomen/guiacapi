-- AddForeignKey
ALTER TABLE "produtos" ADD CONSTRAINT "produtos_subcategoriaID_fkey" FOREIGN KEY ("subcategoriaID") REFERENCES "subcategorias"("id") ON DELETE SET NULL ON UPDATE CASCADE;
