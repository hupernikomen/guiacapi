import prismaClient from "../../prisma";

interface detailProductRequest {
  produtoID: string;
}

class DetalhePdtService {
  async execute({ produtoID }: detailProductRequest) {
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
            avatar: true
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
            nome: true
          }
        }
      },
    });

    return produto;
  }
}

export { DetalhePdtService };
