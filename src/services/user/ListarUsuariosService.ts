import prismaClient from '../../prisma';

class ListarUsuariosService {
  async execute() {
    const usuarios = await prismaClient.user.findMany({
      select: {
        id: true,
        services: { select: { name: true, userID: true, type: true } },
        store: { select: { name: true, userID: true, type: true } },
        food: { select: { name: true, userID: true, type: true } },
        payment: true,
        map: true,
        user: true
      }
    });

    return usuarios;
  }
}

export { ListarUsuariosService };
