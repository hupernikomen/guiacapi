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
        setor:true,
        whatsapp: true,
        horario:true,
        sabado:true,
        domingo:true

      }
    })

    return contato
  }
}

export { ListaContatosService }