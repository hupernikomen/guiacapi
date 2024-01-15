import prismaClient from '../../prisma';

interface serviceRequest {
  userID: string;
  categoryServiceID: string;
}

class CreateServiceService {
  async execute({ userID, categoryServiceID }: serviceRequest) {
    const _service = await prismaClient.service.create({
      data: {
        userID,
        categoryServiceID
      }
    });

    return _service;
  }
}

export { CreateServiceService };
