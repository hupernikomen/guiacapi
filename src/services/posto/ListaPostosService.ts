import prismaClient from "../../prisma";

class ListaPostosService {
  async execute() {

    const postos = await prismaClient.posto.findMany({
      where: {
        usuario: {
          status: true
        }
      },
      select: {
        id: true,
        nome: true,
        avatar: true,
        tabela: true,
        tabela_anterior:true,
        bairro: true,
        usuarioID: true,
        usuario: {
          select: {
            mapa: true
          }
        }

      }
    })

    return postos
  }
}

export { ListaPostosService }