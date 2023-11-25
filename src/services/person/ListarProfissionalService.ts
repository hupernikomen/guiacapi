import prismaClient from "../../prisma";
import 'dotenv/config';

interface PersonRquest {
  regionID: string
}

class ListarProfissionalService {

  async execute({ regionID }: PersonRquest) {

    const regionQuery = { user: { payment: { some: { status: "Aprovado" } } } }


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