import prismaClient from '../../prisma';

interface menuRequest {
  menuID: string;
}

class GetMenuService {
  async execute({ menuID }: menuRequest) {
    const owner = await prismaClient.menu.findFirst({
      where: { id: menuID },
      select: {
        id: true,
        image: true,
        name: true,
        price: true,
        details: true,
        food: { select: { _count: true, menu: true, avatar: true, categoryFood: true, delivery: true, name: true, type: true, user: true } }
      }
    });
    return owner;
  }
}

export { GetMenuService };
