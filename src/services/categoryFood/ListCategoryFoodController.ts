import prismaClient from '../../prisma';

class ListCategoryFoodService {
  async execute() {
    const _categoryFood = await prismaClient.categoryFood.findMany({
      select: {
        id: true,
        name: true
      }
    });

    return _categoryFood;
  }
}

export { ListCategoryFoodService };
