import prismaClient from "../../prisma";

interface usuarioRequest {
  userID: string
}

class BuscaUsuarioService {
  async execute({ userID  }: usuarioRequest) {

    const _user = await prismaClient.user.findFirst({
      where: { id: userID },
      select: {
        id: true,
        user: true,
        gasStation: true,
        person: true,
        store: true,
        status: true,
        map: true,
        company: true
      }
    })

    return _user
  }
}

export { BuscaUsuarioService }