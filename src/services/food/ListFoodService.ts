import prismaClient from '../../prisma';

class ListFoodService {
  async execute() {
    return await prismaClient.food.findMany({
      where: {
        user: {
          payment: { some: { status: 'On' } }
        }
      },
      select: {
        avatar: true,
        name: true,
        delivery: true,
        type: true,
        categoryFood: { select: { name: true } }
      }
    });
  }
}

export { ListFoodService };
