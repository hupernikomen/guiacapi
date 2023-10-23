import prismaClient from "../../prisma";
import 'dotenv/config';

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

    if (regionID === process.env.TERESINAID) {
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
