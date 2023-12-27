import prismaClient from '../../prisma';

class ListarRegioesService {
  async execute() {
    const _region = await prismaClient.region.findMany({
      where: { user: { some: { payment: { some: { status: 'Aprovado' } } } } },
      select: {
        id: true,
        name: true,
        user: { select: { person: true, store: true } }
      }
    });

    const _teresina = await prismaClient.region.findFirst({
      where: { name: 'Teresina' },
      select: {
        id: true,
        name: true,
        user: { select: { person: true, store: true } }
      }
    });

    if (_teresina) {
      _region.push(_teresina);
    }

    return _region;
  }
}

export { ListarRegioesService };
