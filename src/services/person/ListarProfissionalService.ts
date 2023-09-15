
import prismaClient from "../../prisma";

class ListarProfissionalService {

  async execute() {

    const _person = await prismaClient.person.findMany({
      where: { user: { status: true } },
      select: {
        id: true,
        avatar: true,
        name: true,
        professionID: true,
        profession: { select: { name: true } }
      }
    })

    return _person
  }
}

export { ListarProfissionalService }