
import prismaClient from "../../prisma";

interface PersonRquest {
  regionID: string
}

class ListarProfissionalService {

  async execute({ regionID }: PersonRquest) {

    const _person = await prismaClient.person.findMany({
      where: { user: { status: true, regionID } },
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