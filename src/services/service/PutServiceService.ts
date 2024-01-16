import prismaClient from '../../prisma';

interface serviceRequest {
  serviceID: string;
  categoryServiceID: string;
  avatar: object;
  name: string;
  bio: string;
  address: string;
  district: string;
}

class PutServiceService {
  async execute({ serviceID, categoryServiceID, avatar, name, bio, address, district }: serviceRequest) {
    const _service = await prismaClient.service.findFirst({ where: { id: serviceID } });

    if (!_service) throw new Error('Ops, infelizmente não encontramos!');

    const __service = await prismaClient.service.updateMany({
      where: { id: serviceID },
      data: {
        name,
        avatar,
        bio,
        address,
        district,
        categoryServiceID
      }
    });

    return __service;
  }
}

export { PutServiceService };
