import prismaClient from "../../prisma";

interface ProdutoRequest {
  regionID: string;
  arrayCategoriesIDs: string
}

class ListarProdutosService {

  async execute({ regionID, arrayCategoriesIDs }: ProdutoRequest) {

    console.log(regionID, "REG2");
    console.log(arrayCategoriesIDs, "arrayCategoriesIDs2");

    const _product = await prismaClient.product.findMany({
      where: {
        categoryID: { in: arrayCategoriesIDs },
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
