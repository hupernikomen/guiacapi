import prismaClient from '../../prisma';
import 'dotenv/config';

interface PersonRquest {
  regionID: string;
}

class ListaLojasService {
  async execute({ regionID }: PersonRquest) {
    return await prismaClient.store.findMany({
      where: {
        user: {
          payment: { some: { status: 'On' } },
          regionID
        }
      },

      select: {
        product: true,
        type: true,
        id: true,
        name: true,
        avatar: true,
        delivery: true,
        address: true,
        district: true,
        bio: true,
        reference: true,
        user: { select: { payment: { select: { status: true, value: true, expiration: true, createdAt: true } } } },
        userID: true
      }
    });
  }
}

export { ListaLojasService };
