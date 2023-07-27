import prismaClient from "../../prisma";

interface DetalheRequest {
  produtoID: string;
}

class DetalheProdutoService {
  async execute({ produtoID }: DetalheRequest) {
    const produto = await prismaClient.produto.findUnique({
      where: {
        id: produtoID,
      },
      select: {
        id: true,
        nome: true,
        descricao: true,
        preco: true,
        oferta: true,
        tamanho: true,
        imagens: true,
        loja: {
          select: {
            id: true,
            nome: true,
            delivery:true,
            avatar: true,
            usuarioID:true
          }
        },
        categoria: {
          select: {
            id: true,
            nome: true,
          },
        },
        campanha: {
          select: {
            id: true,
            nome: true,
            tema:true
          }
        }
      },
    });

    return produto;
  }
}

export { DetalheProdutoService };
