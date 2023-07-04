import prismaClient from "../../prisma";

class ListaPostosService {
  async execute() {

    const postos = await prismaClient.posto.findMany({
      select: {
        id: true,
        nome: true,
        avatar: true,
        tabela:true,
        bairro:true,
        usuarioID:true

      }
    })

    return postos
  }
}

export { ListaPostosService }