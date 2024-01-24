import prismaClient from '../../prisma';

class ListMenuService {
  async execute() {
    return await prismaClient.menu.findMany({
      where: {
        food: {
          user: {
            payment: { some: { status: 'On' } }
          }
        }
      },
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
