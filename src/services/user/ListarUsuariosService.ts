import prismaClient from '../../prisma';

class ListarUsuariosService {
  async execute() {
    const usuarios = await prismaClient.user.findMany({
      select: {
        id: true,
        store: { select: { name: true, userID: true, type: true } },
        person: { select: { userID: true, name: true, type: true, profession: { select: { name: true } } } },
        payment: true,
        map: true,
        user: true
      }
    });

    return usuarios;
  }
}

export { ListarUsuariosService };
