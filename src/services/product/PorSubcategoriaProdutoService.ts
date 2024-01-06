import prismaClient from '../../prisma';
import 'dotenv/config';

interface ProdutoRequest {
  subcategoryID: string;
  regionID: string;
}

class PorSubcategoriaProdutoService {
  async execute({ subcategoryID, regionID }: ProdutoRequest) {
    return await prismaClient.product.findMany({
      where: {
        subcategoryID,
        store: {
          user: {
            payment: { some: { status: 'Aprovado' } },
            regionID
          }
        }
      },

      select: {
        id: true,
        off: true,
        price: true,
        name: true,
        image: true,
        campaign: {
          select: {
            id: true,
            name: true,
            theme: true
          }
        },
        subcategory: {
          select: {
            _count: true,
            id: true,
            name: true,
            category: {
              select: {
                id: true,
                name: true
              }
            }
          }
        },
        store: {
          select: {
            type: true,
            id: true,
            name: true,
            delivery: true,
            user: { select: { regionID: true } }
          }
        }
      }
    });
  }
}

export { PorSubcategoriaProdutoService };
