import prismaClient from '../../prisma';

interface foodRequest {
  foodID: string;
}

class GetFoodService {
  async execute({ foodID }: foodRequest) {
    const food = await prismaClient.food.findFirst({
      where: {
        id: foodID
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
