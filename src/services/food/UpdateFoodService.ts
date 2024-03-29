import prismaClient from '../../prisma';

interface foodRequest {
  userID: string;
  avatar: object;
  name: string;
  bio: string;
  address: string;
  district: string;
  delivery: boolean;
  categoryFoodID: string;
}

class UpdateFoodService {
  async execute({ userID, avatar, name, bio, address, district, delivery, categoryFoodID }: foodRequest) {
    const _food = await prismaClient.food.findFirst({ where: { userID } });

    if (!_food) throw new Error('Ops, infelizmente não encontramos!');

    const __food = await prismaClient.food.updateMany({
      where: { userID },
      data: {
        name,
        avatar,
        bio,
        address,
        district,
        delivery,
        categoryFoodID
      }
    });

    return __food;
  }
}
export { UpdateFoodService };
