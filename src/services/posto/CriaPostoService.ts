import prismaClient from "../../prisma";

interface postoRequest {
  usuarioID: string,
}

class CriaPostoService {

  async execute({

    usuarioID

  }: postoRequest) {

    const posto = await prismaClient.posto.create({
      data: {
        usuarioID
      }
    })

    return posto
  }
}

export { CriaPostoService }