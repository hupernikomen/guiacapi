import prismaClient from "../../prisma";

interface DetalheRequest {
  productID: string;
}

class DetalheProdutoService {
  async execute({ productID }: DetalheRequest) {
    const _product = await prismaClient.product.findUnique({
      where: {
        id: productID,
      },
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        off: true,
        size: true,
        color:true,
        image: true,
        store: {
          select: {
            id: true,
            name: true,
            bio:true,
            delivery: true,
            avatar: true,
            userID: true
          }
        },
        category: {
          select: {
            name: true,
          },
        },
        subcategory:{
          select:{
            id:true,
            name:true
          }
        },
        campaign: {
          select: {
            id: true,
            name: true,
          }
        }
      },
    });

    return _product;
  }
}

export { DetalheProdutoService };
