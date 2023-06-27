import prismaClient from "../../prisma";

interface lojaRequest {
  usuarioID: string,
}

class CriaLojaService {

  async execute({

    usuarioID

  }: lojaRequest) {

    const loja = await prismaClient.loja.create({
      data: {
        usuarioID
      }
    })

    return loja
  }
}

export { CriaLojaService }