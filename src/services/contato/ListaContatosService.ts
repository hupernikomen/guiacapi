import prismaClient from "../../prisma";

class ListaContatosService {
  async execute() {

    const contato = await prismaClient.contato.findMany({
      select: {
        id: true,
        nome: true,
        avatar: true,
        whatsapp: true,
        horario:true

      }
    })

    return contato
  }
}

export { ListaContatosService }