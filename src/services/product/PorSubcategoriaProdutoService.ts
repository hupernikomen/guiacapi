import prismaClient from "../../prisma";

interface ProdutoRequest {
  subcategoryID: string;
  regionID:string
}

class PorSubcategoriaProdutoService {
  async execute({ subcategoryID,regionID }: ProdutoRequest) {
    const _subcategory = await prismaClient.product.findMany({
      where: {
        subcategoryID,
        store: {
          user: {
            status: true,
            regionID
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
      },
    });

    return _subcategory;
  }
}

export { PorSubcategoriaProdutoService };
