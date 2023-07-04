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
        usuario: {
          select:{
            mapa:true
          }
        }

      }
    })

    return postos
  }
}

export { ListaPostosService }