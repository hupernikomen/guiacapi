
import prismaClient from "../../prisma";

interface PersonRquest {
  regionID: string
}

class ListarProfissionalService {

  async execute({ regionID }: PersonRquest) {


    const today = new Date().toLocaleDateString('pt-BR');
    const regionQuery = regionID === "cb9085c6-439b-48da-8bc4-17ecd2800d4a" ?
      { user: { not: null, payment: { every: { expiration: { gte: today } } } } } :
      { user: { not: null, payment: { every: { expiration: { gte: today } } }, regionID: regionID } };


    return await prismaClient.person.findMany({
      where: regionQuery,
      select: {
        id: true,
        avatar: true,
        name: true,
        bio: true,
        professionID: true,
        profession: { select: { name: true } },
        userID: true

      }
    })
  }
}

export { ListarProfissionalService }