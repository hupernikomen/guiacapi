import prismaClient from "../../prisma";

interface mapaRequest {
  latlng: object,
  usuarioID: string
}

class AtualizaMapaService {

  async execute({
    latlng,
    usuarioID
  }: mapaRequest) {

    const mapa = await prismaClient.mapa.update({
      where: {
        id: usuarioID
      },
      data: {
        latlng,
      }
    })

    return mapa
  }
}

export { AtualizaMapaService }