import prismaClient from '../../prisma';

interface foodRequest {
  userID: string;
}

class GetFoodService {
  async execute({ userID }: foodRequest) {
    const food = await prismaClient.food.findFirst({
      where: {
        userID
      },
      select: {
        type: true,
        id: true,
        avatar: true,
        name: true,
        address: true,
        delivery: true,
        bio: true,
        district: true,
        menu: true,
        userID: true,
        user: {
          select: { map: { select: { latlng: true } } }
        }
      }
    });

    return food;
  }
}

export { GetFoodService };
