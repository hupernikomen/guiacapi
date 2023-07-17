import prismaClient from "../../prisma";

interface albumRequest {
  imagem: object,
  profissionalID: string
}

class CriaAlbumService {

  async execute({
    imagem,
    profissionalID

  }: albumRequest) {



    const album = await prismaClient.album.create({
      data: {
        imagem,
        profissionalID
      }
    })


    return album
  }
}

export { CriaAlbumService }