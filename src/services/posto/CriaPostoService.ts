import prismaClient from "../../prisma";

interface postoRequest {
  usuarioID: string,
}

class CriaPostoService {

  async execute({

    usuarioID

  }: postoRequest) {

    const postoExiste = await prismaClient.posto.findFirst({
      where: {
        usuarioID
      }
    })

    if (postoExiste) {
      throw new Error("Posto já cadastrado!");
    }

    const posto = await prismaClient.posto.create({
      data: {
        usuarioID
      }
    })

    return posto
  }
}

export { CriaPostoService }