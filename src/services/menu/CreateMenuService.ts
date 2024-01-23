import prismaClient from '../../prisma';

interface menuRequest {
  name: string;
  price: string;
  details: string;
  foodID: string;
}

class CreateMenuService {
  async execute({ name, price, details, foodID }: menuRequest) {
    const _menu = await prismaClient.menu.create({
      data: {
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
