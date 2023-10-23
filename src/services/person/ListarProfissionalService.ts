
import prismaClient from "../../prisma";

interface PersonRquest {
  regionID: string
}

class ListarProfissionalService {

  async execute({ regionID }: PersonRquest) {


    const today = new Date().toLocaleDateString('pt-BR');
    const regionQuery = regionID === "bba1f5be-3be9-4af3-8d86-5a8ae7963915" ?
      { user: { payment: { every: { expiration: { gte: today } } } } } :
      { user: { payment: { every: { expiration: { gte: today } } }, regionID: regionID } };


    return await prismaClient.person.findMany({
      where: regionQuery,
      select: {
        id: true,
        avatar: true,
        name: true,
        bio: true,
        professionID: true,
        user: { select: { payment: true } },
        profession: { select: { name: true } },
        userID: true

      }
    })
  }
}

export { ListarProfissionalService }