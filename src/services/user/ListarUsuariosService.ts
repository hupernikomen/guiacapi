import prismaClient from '../../prisma';

class ListarUsuariosService {
  async execute() {
    const usuarios = await prismaClient.user.findMany({
      select: {
        id: true,
        user: true,
        store: { select: { name: true, userID: true } },
        person: { select: { userID: true, name: true, profession: { select: { name: true } } } },
        fuelStation: { select: { name: true } },
        region: { select: { name: true } },
        contact: true,
        payment: true,
        map: true
      }
    });

    return usuarios;
  }
}

export { ListarUsuariosService };
