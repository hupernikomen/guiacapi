import prismaClient from '../../prisma';

interface usuarioRequest {
  userID: string;
}

class BuscaUsuarioService {
  async execute({ userID }: usuarioRequest) {
    const _user = await prismaClient.user.findFirst({
      where: { id: userID },
      select: {
        id: true,
        payment: true,
        store: { select: { name: true, type: true } },
        person: { select: { name: true, type: true } }
      }
    });

    return _user;
  }
}

export { BuscaUsuarioService };
