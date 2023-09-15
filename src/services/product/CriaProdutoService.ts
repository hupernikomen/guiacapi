import prismaClient from "../../prisma";

interface ProductRequest {
  reference: string,
  name: string,
  description: string,
  price: number,
  size: string,
  color: string,
  image: object,
  categoryID: string,
  subcategoryID:string,
  storeID: string,
}

class CriaProdutoService {
  async execute({
    reference,
    name,
    description,
    price,
    size,
    color,
    image,
    categoryID,
    subcategoryID,
    storeID,
  }: ProductRequest) {
    try {

      const _product = await prismaClient.product.create({
        data: {
          reference,
          name,
          description,
          price: Number(price),
          size,
          color,
          image,
          categoryID,
          subcategoryID,
          storeID,
        },
      });

      return _product;

    } catch (error) {
      console.error('Erro no Service API', error)
    }

  }
}

export { CriaProdutoService };
