import prismaClient from "../../prisma";

import 'dotenv/config';

interface ProdutoRequest {
  regionID: string;
}

class ListarProdutosService {

  async execute({ regionID }: ProdutoRequest) {

    const storeQuery = {  user: { payment: { some: { status: "Aprovado" } } } } 

    return await prismaClient.product.findMany({
      where: {
        store: storeQuery,
      },
      select: {

        id: true,
        name: true,
        price: true,
        off: true,
        image: true,
        campaign: { select: { id: true, name: true, theme: true } },
        store: {
          select: {
            id: true, name: true, delivery: true,
            user: { select: { regionID: true, } }
          }
        },
        category: {
          select: {
            id: true, name: true, _count: true,
            subcategory: { select: { id: true, name: true, _count: true } }
          }
        }
      }
    })

  }
}

export { ListarProdutosService };
