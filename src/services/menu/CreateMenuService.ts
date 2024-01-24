import prismaClient from '../../prisma';

interface menuRequest {
  image: object;
  name: string;
  price: string;
  details: string;
  foodID: string;
}

class CreateMenuService {
  async execute({ image, name, price, details, foodID }: menuRequest) {
    const _menu = await prismaClient.menu.create({
      data: {
        image,
        name,
        price,
        details,
        foodID
      }
    });

    return _menu;
  }
}

export { CreateMenuService };
