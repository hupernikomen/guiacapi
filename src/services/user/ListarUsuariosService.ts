import prismaClient from "../../prisma";

class ListarUsuariosService {
  async execute() {

    const usuarios = await prismaClient.user.findMany({
      select: {
        id: true,
        user: true,
        store: { select: { name: true } },
        person: { select: { name: true, profession: { select: { name: true } } } },
        fuelStation: { select: { name: true } },
        region: { select: { name: true } },
        contact: true,

      }
    })

    return usuarios
  }
}

export { ListarUsuariosService }