
import prismaClient from "../../prisma";

interface PersonRquest {
  regionID: string
}

class ListarProfissionalService {

  async execute({ regionID }: PersonRquest) {

    const select = {
      id: true,
      avatar: true,
      name: true,
      bio:true,
      professionID: true,
      profession: { select: { name: true } },
      userID:true
      
    }

    if (regionID === "cb9085c6-439b-48da-8bc4-17ecd2800d4a") {
      return await prismaClient.person.findMany({
        where: { user: { status: true } },
        select: select

      })
    }

    return await prismaClient.person.findMany({
      where: { user: { status: true, regionID: regionID } },
      select: select
    })
  }
}

export { ListarProfissionalService }