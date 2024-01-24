import prismaClient from '../../prisma';

class ListMenuService {
  async execute() {
    return await prismaClient.menu.findMany({
      select: {
        id: true,
        image: true,
        name: true,
        price: true,
        details: true,
        foodID: true,
        food: { select: { name: true, userID: true } }
      }
    });
  }
}

export { ListMenuService };
