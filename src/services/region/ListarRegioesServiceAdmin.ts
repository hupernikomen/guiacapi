import prismaClient from '../../prisma';

class ListarRegioesServiceAdmin {
  async execute() {
    const _region = await prismaClient.region.findMany({
      select: {
        id: true,
        name: true,
        user: { select: { services: true, store: true } }
      }
    });

    return _region;
  }
}

export { ListarRegioesServiceAdmin };
