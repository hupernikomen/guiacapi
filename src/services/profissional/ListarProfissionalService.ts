
import prismaClient from "../../prisma";

class ListarProfissionalService {

  async execute() {

    const profissional = await prismaClient.profissional.findMany({
      where: {
        usuario:{
          status: true,
        }
      },

      select: {
        id: true,
        avatar: true,
        nome: true,
        album:true,
        lista_servicos:true,
        endereco:true,
        bio:true,
       
      }
    })

    return profissional
  }
}

export { ListarProfissionalService}