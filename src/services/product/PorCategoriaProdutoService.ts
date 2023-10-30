import prismaClient from "../../prisma";
import 'dotenv/config';

interface ProdutoRequest {
  categoryID: string;
  regionID: string
}

class PorCategoriaProdutoService {
  async execute({ categoryID, regionID }: ProdutoRequest) {

    const today = new Date().toLocaleDateString('pt-BR');
    const storeWhere = regionID === process.env.TERESINAID ? 
    { user: { payment: { every: { expiration: { gte: today } } } } } : 
    { user: { payment: { every: { expiration: { gte: today } } }, regionID: regionID } };


    return await prismaClient.product.findMany({
      where: {
        categoryID,
        store: storeWhere
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

    });

  }
}

export { PorCategoriaProdutoService };
