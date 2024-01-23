import prismaClient from '../../prisma';

interface categoryFoodRequest {
  name: string;
}

class CreateCategoryFoodService {
  async execute({ name }: categoryFoodRequest) {
    const _categoryFood = await prismaClient.categoryFood.findFirst({ where: { name } });
    if (_categoryFood) throw new Error('Categoria já existe');

    const __categoryFood = await prismaClient.categoryFood.create({ data: { name } });
    return __categoryFood;
  }
}

export { CreateCategoryFoodService };
