import prismaClient from '../../prisma';

interface mapaRequest {
  userID: string;
}

class BuscaMapaService {
  async execute({ userID }: mapaRequest) {
    const _map = await prismaClient.map.findFirst({
      where: { userID },
      select: {
        id: true,
        userID: true,
        latlng: true,
        user: { select: { services: true, store: true } }
      }
    });
    return _map;
  }
}

export { BuscaMapaService };
