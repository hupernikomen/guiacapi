import prismaClient from '../../prisma';

interface foodRequest {
  userID: string;
}

class CreateFoodService {
  async execute({ userID }: foodRequest) {
    const _food = await prismaClient.food.create({ data: { userID } });
    return _food;
  }
}

export { CreateFoodService };
