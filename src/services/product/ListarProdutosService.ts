import prismaClient from "../../prisma";

interface ProdutoRequest {
  regionID: string;
}

class ListarProdutosService {

  async execute({ regionID }: ProdutoRequest) {


    const today = new Date().toLocaleDateString('pt-BR');
    const storeWhere = regionID === "bba1f5be-3be9-4af3-8d86-5a8ae7963915" ? 
    { user: { payment: { every: { expiration: { gte: today } } } } } : 
    { user: { payment: { every: { expiration: { gte: today } } }, regionID: regionID } };

    return await prismaClient.product.findMany({
      where: {
        store: storeWhere
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
    })

  }
}

export { ListarProdutosService };
