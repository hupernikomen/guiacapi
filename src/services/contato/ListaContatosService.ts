import prismaClient from "../../prisma";

interface contatoRequest {
  usuarioID: string
}

class ListaContatosService {
  async execute({
    usuarioID
}: contatoRequest) {

    const contato = await prismaClient.contato.findMany({
      where:{
        usuarioID
      },
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