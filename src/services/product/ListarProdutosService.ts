import prismaClient from "../../prisma";

class ListarProdutosService {
  async execute() {
    const _product = await prismaClient.product.findMany({
      where: {

        store: {
          user: {
            status: true,
          }
        },
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
    });

    return _product;
  }
}

export { ListarProdutosService };