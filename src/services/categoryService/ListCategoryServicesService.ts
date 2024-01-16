import prismaClient from '../../prisma';

class ListCategoryServicesService {
  async execute() {
    const _categoryService = await prismaClient.categoryService.findMany({
      select: {
        id: true,
        name: true
      }
    });

    return _categoryService;
  }
}

export { ListCategoryServicesService };
