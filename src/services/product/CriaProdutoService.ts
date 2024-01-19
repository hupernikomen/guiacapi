import prismaClient from '../../prisma';

interface ProductRequest {
  reference: string;
  name: string;
  description: string;
  price: number;
  size: string;
  color: string[];
  image: object;
  categoryID: string;
  subcategoryID: string;
  storeID: string;
}

class CriaProdutoService {
  async execute({ reference, name, description, price, size, color, image, categoryID, subcategoryID, storeID }: ProductRequest) {
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
          storeID
        }
      });

      console.log(_product);
      console.log(typeof _product.price, 'tratado');

      return _product;
    } catch (error) {
      console.error('Erro no Service API', error);
      throw new Error('Ops! Algo deu errado na postagem');
    }
  }
}

export { CriaProdutoService };
