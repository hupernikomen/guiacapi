import prismaClient from "../../prisma";

interface profissionalRequest {
  usuarioID: string,
  profissaoID:string
}

class CriaProfissionalService {

  async execute({

    usuarioID,
    profissaoID

  }: profissionalRequest) {

    const profissional = await prismaClient.profissional.create({
      data: {
        usuarioID,
        profissaoID
      }
    })

    return profissional
  }
}

export { CriaProfissionalService }