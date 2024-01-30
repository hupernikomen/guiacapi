import prismaClient from '../../prisma';

class ListFoodService {
  async execute() {
    return await prismaClient.food.findMany({
      where: {
        user: {
          payment: { some: { status: 'On' } }
        }
      }
    });
  }
}

export { ListFoodService };
