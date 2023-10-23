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

    if (regionID === "bba1f5be-3be9-4af3-8d86-5a8ae7963915") {
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
