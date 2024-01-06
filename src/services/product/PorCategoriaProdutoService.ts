import prismaClient from '../../prisma';
import 'dotenv/config';

interface ProdutoRequest {
  categoryID: string;
  regionID: string;
}

class PorCategoriaProdutoService {
  async execute({ categoryID, regionID }: ProdutoRequest) {
    return await prismaClient.product.findMany({
      where: {
        categoryID,
        store: {
          user: {
            payment: { some: { status: 'Aprovado' } },
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
        category: {
          select: {
            id: true,
            name: true,
            _count: true
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
            type: true,
            id: true,
            name: true,
            delivery: true
          }
        }
      }
    });
  }
}

export { PorCategoriaProdutoService };
