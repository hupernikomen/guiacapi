import prismaClient from '../../prisma';

class ListaMapasService {
  async execute() {
    const map = await prismaClient.map.findMany({
      select: {
        id: true,
        latlng: true,
        user: true
      }
    });

    return map;
  }
}

export { ListaMapasService };
