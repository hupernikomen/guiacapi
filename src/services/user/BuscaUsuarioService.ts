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
        fuelStation:true,
        person: true,
        store: true,
        map: true,
      }
    })

    return _user
  }
}

export { BuscaUsuarioService }