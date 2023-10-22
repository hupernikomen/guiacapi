import prismaClient from "../../prisma";

interface ProdutoRequest {
  categoryID: string;
  regionID: string
}

class PorCategoriaProdutoService {
  async execute({ categoryID, regionID }: ProdutoRequest) {

    const select = {
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
      category: {
        select: {
          id: true,
          name: true,
          _count: true,
        }
      },
      subcategory: {
        select: {
          id: true,
          name: true,
          _count: true
        }
      },
      store: {
        select: {
          id: true,
          name: true,
          delivery: true
        }
      },
    }

    if (regionID === "cb9085c6-439b-48da-8bc4-17ecd2800d4a") {
      return await prismaClient.product.findMany({
        where: {
          categoryID,
        },
        select: select
      })
    }

    return await prismaClient.product.findMany({
      where: {
        categoryID,
        store: {
          user: {
            regionID
          }
        },

      },

      select: select

    });

  }
}

export { PorCategoriaProdutoService };
