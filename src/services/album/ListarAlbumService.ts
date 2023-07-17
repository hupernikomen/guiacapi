import prismaClient from "../../prisma";

interface albumRequest {
  profissionalID: string
}

class ListaAlbumService {
  async execute({
    profissionalID
}: albumRequest) {

    const album = await prismaClient.album.findMany({
      where:{
        profissionalID
      },
      select:{
        imagem:true
      }
    })

    return album
  }
}

export { ListaAlbumService }