import prismaClient from "../../prisma";
import 'dotenv/config';

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

    const storeQuery = { user: { payment: { some: { status: "Aprovado" } } } } 

    return await prismaClient.product.findMany({
      where: {
        subcategoryID,
        store: storeQuery
      },
      select: select

    });

  }
}

export { PorSubcategoriaProdutoService };
