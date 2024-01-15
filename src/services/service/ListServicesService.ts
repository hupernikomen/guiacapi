import prismaClient from '../../prisma';
import 'dotenv/config';

interface servicesRquest {
  regionID: string;
}

class ListServicesService {
  async execute({ regionID }: servicesRquest) {
    return await prismaClient.service.findMany({
      where: {
        user: {
          payment: { some: { status: 'On' } },
          regionID
        }
      },
      select: {
        type: true,
        id: true,
        avatar: true,
        name: true,
        bio: true,
        address: true,
        district: true,
        categoryServiceID: true,
        user: { select: { payment: true } },
        userID: true,
        createdAt: true
      }
    });
  }
}

export { ListServicesService };
