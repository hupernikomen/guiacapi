import prismaClient from "../../prisma";

interface ProdutoRequest {
  regionID: string;
  listIDsCategories: string
}

class ListarProdutosService {

  async execute({ regionID, listIDsCategories }: ProdutoRequest) {
    const select = {
      id: true,
      name: true,
      price: true,
      off: true,
      image: true,
      campaign: { select: { id: true, name: true, theme: true } },
      store: {
        select: {
          id: true, name: true, delivery: true,
          user: { select: { regionID: true } }
        }
      },
      category: {
        select: {
          id: true, name: true, _count: true,
          subcategory: { select: { id: true, name: true, _count: true } }
        }
      }
    }

    if (regionID === "cb9085c6-439b-48da-8bc4-17ecd2800d4a") {
      return await prismaClient.product.findMany({
        where: {
          categoryID: { contains: listIDsCategories },
          store: {
            user: {
              status: true,
            }
          }
        },
        select: select
      })
    }

    return await prismaClient.product.findMany({
      where: {
        categoryID: { in: listIDsCategories },
        store: {
          user: {
            status: true,
            regionID: regionID

          }
        }
      },

      select: select
    })

  }
}

export { ListarProdutosService };
