import prismaClient from '../../prisma';

class ListaMapasService {
  async execute() {
    const map = await prismaClient.map.findMany({
      select: {
        id: true,
        latlng: true,
        user: {
          select: {
            store: true,
            person: { select: { profession: { select: { name: true } }, address: true, avatar: true, name: true, professionID: true, bio: true } }
          }
        }
      }
    });

    return map;
  }
}

export { ListaMapasService };
