import prismaClient from "../../prisma";

interface mapaRequest {
  usuarioID: string
}


class BuscaMapaService {
  async execute({
    usuarioID
  }: mapaRequest) {

    const mapa = await prismaClient.mapa.findFirst({

      where: {
        usuarioID,
      },
      select: {
        id: true,
        usuarioID: true,
        latlng: true
      }
    })



    return mapa
  }
}

export { BuscaMapaService }