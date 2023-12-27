import prismaClient from '../../prisma';

class ListarRegioesService {
  async execute() {
    const _region = await prismaClient.region.findMany({
      where: { OR: [{ user: { some: { payment: { some: { status: 'Aprovado' } } } } }, { user: { some: { region: { name: 'Teresina' } } } }] },
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
