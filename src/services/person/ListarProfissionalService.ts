
import prismaClient from "../../prisma";

interface PersonRquest {
  regionID: string
}

class ListarProfissionalService {

  async execute({ regionID }: PersonRquest) {

    const _person = await prismaClient.person.findMany({
      where: { user: { status: true, OR: [{ regionID: regionID }, { regionID: { equals: "cb9085c6-439b-48da-8bc4-17ecd2800d4a" } }] } },
      
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