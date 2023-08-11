import prismaClient from "../../prisma";

class ListarProdutosService {
  async execute() {
    const produto = await prismaClient.produto.findMany({
      where: {
        loja: {
          usuario: {
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
        campanha: {
          select: {
            id: true,
            nome: true,
          }
        },
        loja: {
          select: {
            id: true,
            nome: true,
            delivery: true
          }
        },
        categoria: {
          select: { id:true, nome: true }
        }
      },
    });

    return produto;
  }
}

export { ListarProdutosService };
