import prismaClient from '../../prisma';

class ListaCategoriaService {
  async execute() {
    const _category = await prismaClient.category.findMany({
      where: {
        product: {
          every: {
            store: {
              user: {
                payment: { some: { status: 'On' } }
              }
            }
          }
        }
      },
      select: {
        id: true,
        name: true,
        subcategory: { select: { name: true, _count: true, categoryID: true } },
        _count: true
      }
    });

    return _category;
  }
}

export { ListaCategoriaService };
