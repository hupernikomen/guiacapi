import prismaClient from "../../prisma";

interface ProductRequest {
  nomeProduto: string;
}

class BuscarProdutosService {
  async execute({
    nomeProduto
  }:ProductRequest) {
    const produto = await prismaClient.produto.findMany({
      where: {
        nome: nomeProduto
      },
      select: {
        id: true,
        nome: true,
        preco: true,
        descricao:true,
        oferta: true,
        imagens: true,
        categoria:{
          select:{
            id:true,
            nome:true
          }
        },
        loja:{
          select:{
            id:true,
            nome:true
          }
        }

      },
    });

    return produto;
  }
}

export { BuscarProdutosService };
