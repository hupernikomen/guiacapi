import prismaClient from "../../prisma";

interface ProdutoRequest {
  regionID: string;
}

class ListarProdutosService {

  async execute({ regionID }: ProdutoRequest) {

    const _product = await prismaClient.product.findMany({
      where: {
        store: {
          user: {
            status: true,
            OR: [{ regionID: regionID }, { regionID: "cb9085c6-439b-48da-8bc4-17ecd2800d4a" }]
          }
        }
      },

      select: {
        id: true,
        name: true,
        price: true,
        off: true,
        image: true,
        campaign: {
          select: {
            id: true,
            name: true,
            theme: true
          }
        },
        store: {
          select: {
            id: true,
            name: true,
            delivery: true,
            user: { select: { regionID: true } }
          }
        },
        category: {
          select: {
            id: true, name: true, _count: true,
            subcategory: {
              select: {
                id: true, name: true, _count: true
              }
            }
          }
        }
      },
    }).finally(async () => await prismaClient.$disconnect())

    return _product;
  }
}

export { ListarProdutosService };
