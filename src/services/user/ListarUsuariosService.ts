import prismaClient from "../../prisma";

class ListarUsuariosService {
  async execute() {

    const usuarios = await prismaClient.user.findMany({
      select: {
        id: true,
        status: true,
        store: { select: { name: true } },
        person: { select: { name: true, profession: { select: { name: true } } } },
        gasStation: { select: { name: true } },
        region: { select: { name: true } },
        contact: true,
        company:true

      }
    })

    return usuarios
  }
}

export { ListarUsuariosService }