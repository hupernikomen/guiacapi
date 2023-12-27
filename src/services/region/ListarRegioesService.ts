import prismaClient from '../../prisma';

class ListarRegioesService {
  async execute() {
    const _region = await prismaClient.region.findMany({
      where: { user: { every: { payment: { every: { status: 'Aprovado' } } } } },
      select: {
        id: true,
        name: true,
        user: { select: { person: true, store: true } }
      }
    });

    return _region;
  }
}

export { ListarRegioesService };
