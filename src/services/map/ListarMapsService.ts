import prismaClient from '../../prisma';

class ListaMapasService {
  async execute() {
    const map = await prismaClient.map.findMany({
      where: {
        user: {
          payment: { some: { status: 'On' } }
        }
      },
      select: {
        id: true,
        latlng: true,
        user: {
          select: {
            store: true,
            services: true
          }
        }
      }
    });

    return map;
  }
}

export { ListaMapasService };
