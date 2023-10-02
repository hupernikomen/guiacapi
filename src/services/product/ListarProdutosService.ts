import prismaClient from "../../prisma";

interface ProdutoRequest {
  regionID: string;
  arrayIDs: string
}

class ListarProdutosService {
  
  async execute({ regionID, arrayIDs }: ProdutoRequest) {
    console.log(arrayIDs,"NORMAL");
    const _product = await prismaClient.product.findMany({
      where: {
        categoryID: { in: arrayIDs },
        store: {
          user: {
            status: true,
            regionID
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
        categoryID: true,
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
    });

    return _product;
  }
}

export { ListarProdutosService };
