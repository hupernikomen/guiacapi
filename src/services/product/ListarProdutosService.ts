import prismaClient from "../../prisma";

interface ProdutoRequest {
  regionID: string;
}

class ListarProdutosService {

  async execute({ regionID }: ProdutoRequest) {
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

    const today = new Date().toLocaleDateString('pt-BR');

    // if (regionID === "cb9085c6-439b-48da-8bc4-17ecd2800d4a") {
    //   return await prismaClient.product.findMany({
    //     where: { store: { user: { payment: { every: { expiration: { gte: today } } } } } },
    //     select: select
    //   })
    // }


    // return await prismaClient.product.findMany({
    //   where: {
    //     store: {
    //       user: {
    //         payment: { every: { expiration: { gte: today } } },
    //         regionID: regionID

    //       }
    //     }
    //   },

    //   select: select
    // })

    const isMonthlyPaymentRegion = regionID === "cb9085c6-439b-48da-8bc4-17ecd2800d4a";

    return await prismaClient.product.findMany({
        where: {
          store:{
            user: {
              regionID: regionID,
              payment: isMonthlyPaymentRegion ? { every: { expiration: { gte: today }} } : undefined
            }
          }
        },
        select: select
    })

  }
}

export { ListarProdutosService };
