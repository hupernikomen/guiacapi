import prismaClient from "../../prisma";

interface ProdutoRequest {
  categoriaID: string;
}

class PorCategoriaProdutoService {
  async execute({ categoriaID }: ProdutoRequest) {
    const categoria = await prismaClient.produto.findMany({
      where: {
        categoriaID,
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
        categoria:{
          select: {
           id:true,
           nome:true,
           _count:true,
           subCategoria:true 
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

    return categoria;
  }
}

export { PorCategoriaProdutoService };
