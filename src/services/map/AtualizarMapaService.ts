import prismaClient from "../../prisma";

interface mapaRequest {
  latlng: object,
  userID: string
}

class AtualizaMapaService {

  async execute({ latlng, userID }: mapaRequest) {

    const _map = await prismaClient.map.updateMany({
      where: { userID },
      data: { latlng }
    })

    return _map
  }
}

export { AtualizaMapaService }