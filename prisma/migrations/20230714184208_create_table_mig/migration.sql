-- CreateTable
CREATE TABLE "bannres" (
    "id" TEXT NOT NULL,
    "rota" TEXT NOT NULL,
    "id_rota" TEXT NOT NULL,
    "uri" TEXT NOT NULL,
    "lojaID" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "bannres_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "bannres_lojaID_key" ON "bannres"("lojaID");

-- AddForeignKey
ALTER TABLE "bannres" ADD CONSTRAINT "bannres_lojaID_fkey" FOREIGN KEY ("lojaID") REFERENCES "lojas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
