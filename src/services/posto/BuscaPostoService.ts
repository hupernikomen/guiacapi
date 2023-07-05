import prismaClient from "../../prisma";

interface postoRequest {
  usuarioID: string
}


class BuscaPostoService {
  async execute({
    usuarioID
  }: postoRequest) {

    const posto = await prismaClient.posto.findFirst({

      where: {
        usuario: {
          id: usuarioID,
          status: true
        }

      },
      select: {
        usuarioID: true,
        id: true,
        nome: true,
        tabela: true,
        avatar: true,
        bairro: true,
      }
    })



    return posto
  }
}

export { BuscaPostoService }