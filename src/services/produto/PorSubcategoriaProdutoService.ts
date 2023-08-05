import prismaClient from "../../prisma";

interface ProdutoRequest {
  subcategoriaID: string;
}

class PorSubcategoriaProdutoService {
  async execute({ subcategoriaID }: ProdutoRequest) {
    const subcategoria = await prismaClient.produto.findMany({
      where: {
        subcategoriaID,
        loja: {
          usuario:{
            status: true,
          }
        },
      },
      select: {
        id: true,
        nome: true,
        preco: true,
        oferta: true,
        imagens: true,
        campanha:{
          select:{
            id:true,
            nome:true,
            tema:true
          }
        },
        loja:{
          select:{
            id:true,
            nome:true,
            delivery:true
          }
        },
      },
    });

    return subcategoria;
  }
}

export { PorSubcategoriaProdutoService };
