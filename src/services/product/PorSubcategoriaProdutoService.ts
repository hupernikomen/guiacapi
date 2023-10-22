import prismaClient from "../../prisma";

interface ProdutoRequest {
  subcategoryID: string;
  regionID: string
}

class PorSubcategoriaProdutoService {
  async execute({ subcategoryID, regionID }: ProdutoRequest) {

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
          theme: true,
        }
      },
      subcategory: {
        select: {
          _count: true,
          id: true,
          name: true,
          category: {
            select: {
              name: true
            }
          }
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
    }

    if (regionID === "cb9085c6-439b-48da-8bc4-17ecd2800d4a") {
      return await prismaClient.product.findMany({
        where: {
          subcategoryID,
        },
        select: select
      })
    }

    return await prismaClient.product.findMany({
      where: {
        subcategoryID,
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

export { PorSubcategoriaProdutoService };
