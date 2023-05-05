-- CreateTable
CREATE TABLE "servicos" (
    "id" TEXT NOT NULL,
    "foto" JSONB[],
    "imgServicos" JSONB[],
    "nome" TEXT NOT NULL,
    "tipoServico" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "domicilio" BOOLEAN NOT NULL DEFAULT false,
    "endereco" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT false,
    "categoria" TEXT NOT NULL DEFAULT '',
    "regiaoID" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "servicos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lojas" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "logo" JSONB[],
    "ativo" BOOLEAN NOT NULL DEFAULT false,
    "nome" TEXT,
    "whatsapp" TEXT,
    "bio" TEXT,
    "endereco" TEXT,
    "bairro" TEXT,
    "referencia" TEXT,
    "latlng" JSONB,
    "entrega" BOOLEAN NOT NULL DEFAULT false,
    "regiaoID" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lojas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produtos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" TEXT NOT NULL,
    "oferta" TEXT NOT NULL DEFAULT '',
    "tamanho" TEXT,
    "cor" TEXT[],
    "imagens" JSONB[],
    "lojaID" TEXT NOT NULL,
    "categoriaID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categorias" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "regioes" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "regioes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "servicos" ADD CONSTRAINT "servicos_regiaoID_fkey" FOREIGN KEY ("regiaoID") REFERENCES "regioes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lojas" ADD CONSTRAINT "lojas_regiaoID_fkey" FOREIGN KEY ("regiaoID") REFERENCES "regioes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produtos" ADD CONSTRAINT "produtos_lojaID_fkey" FOREIGN KEY ("lojaID") REFERENCES "lojas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produtos" ADD CONSTRAINT "produtos_categoriaID_fkey" FOREIGN KEY ("categoriaID") REFERENCES "categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
