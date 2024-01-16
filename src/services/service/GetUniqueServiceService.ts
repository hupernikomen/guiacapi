import prismaClient from '../../prisma';

interface serviceRequest {
  serviceID: string;
}

class GetUniqueServiceService {
  async execute({ serviceID }: serviceRequest) {
    const _service = await prismaClient.service.findUnique({
      where: { id: serviceID },
      select: {
        id: true,
        name: true,
        avatar: true,
        bio: true,
        type: true,
        address: true,
        userID: true,
        user: { select: { map: { select: { latlng: true } } } },
        categoryService: { select: { id: true, name: true } }
      }
    });

    return _service;
  }
}

export { GetUniqueServiceService };
