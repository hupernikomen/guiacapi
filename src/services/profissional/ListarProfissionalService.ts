
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
        profissaoID:true,
        profissao: {
          select:{
            nome:true
          }
        }
       
      }
    })

    return profissional
  }
}

export { ListarProfissionalService}