import prismaClient from "../../prisma";

interface profissionalRequest {
  usuarioID: string,
}

class CriaProfissionalService {

  async execute({

    usuarioID

  }: profissionalRequest) {

    const profissional = await prismaClient.profissional.create({
      data: {
        usuarioID
      }
    })

    return profissional
  }
}

export { CriaProfissionalService }