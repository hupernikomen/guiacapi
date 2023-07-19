
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
        lista_servicos:true,
        endereco:true,
        album:true,
        bio:true,
        usuarioID:true,
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