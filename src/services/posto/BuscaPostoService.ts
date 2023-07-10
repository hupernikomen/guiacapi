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
        tabela_anterior:true,
        avatar: true,
        bairro: true,
        updatedAt:true
      }
    })



    return posto
  }
}

export { BuscaPostoService }