import prismaClient from '../../prisma';

import 'dotenv/config';

interface ProdutoRequest {
  regionID: string;
}

class ListarProdutosService {
  async execute({ regionID }: ProdutoRequest) {
    return await prismaClient.product.findMany({
      where: {
        store: {
          user: {
            payment: { some: { status: 'On' } },
            regionID
          }
        }
      },
      select: {
        id: true,
        reference: true,
        name: true,
        price: true,
        off: true,
        image: true,
        campaign: { select: { id: true, name: true, theme: true } },
        store: {
          select: {
            type: true,
            id: true,
            name: true,
            delivery: true,
            user: { select: { regionID: true } }
          }
        },
        category: {
          select: {
            id: true,
            name: true,
            _count: true,
            subcategory: { select: { id: true, name: true, _count: true } }
          }
        }
      }
    });
  }
}

export { ListarProdutosService };
