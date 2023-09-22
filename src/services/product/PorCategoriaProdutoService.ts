import prismaClient from "../../prisma";

interface ProdutoRequest {
  categoryID: string;
  regionID: string
}

class PorCategoriaProdutoService {
  async execute({ categoryID,regionID }: ProdutoRequest) {
    const _category = await prismaClient.product.findMany({
      where: {
        categoryID,
        OR:[
          {
            store:{
              user:{
                regionID,
                status:true
              }
            }
          },
          {
            store:{
              user:{
                regionID: null,
                status:true
              }
            }
          }
        ]
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
      },
    });

    return _category;
  }
}

export { PorCategoriaProdutoService };
