import prismaClient from '../../prisma';

interface produtoRequest {
  reference: string;
  name: string;
  description: string;
  price: number;
  off: number;
  size: string;
  color: string[];
  categoryID: string;
  campaignID: string;
  productID: string;
}

class AtualizaProdutoService {
  async execute({ reference, name, description, price, off, size, color, categoryID, campaignID, productID }: produtoRequest) {
    const _product = await prismaClient.product.updateMany({
      where: { id: productID },
      data: {
        reference,
        name,
        description,
        price,
        off,
        size,
        color,
        categoryID,
        campaignID: off != 0 ? campaignID : null
      }
    });

    return _product;
  }
}

export { AtualizaProdutoService };
