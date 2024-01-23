import prismaClient from '../../prisma';

class ListMenuService {
  async execute() {
    return await prismaClient.menu.findMany({
      select: {
        id: true,
        name: true,
        price: true,
        details: true,
        foodID: true
      }
    });
  }
}

export { ListMenuService };
