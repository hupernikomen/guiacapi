
import prismaClient from "../../prisma";

class ListaProfService {

  async execute() {

    const profissional = await prismaClient.profissional.findMany({
      where: {
        statusGuia: true,
        // regiao: {
        //   nome: "Dirceu", // Logica de alteração de REGIAO no FrontEnd
        // },
      },

      select: {

        id: true,
        avatar: true,
        nome: true,
        whatsapp: true,
        portfolio:true,
        listaServicos:true,
        aDomicilio:true,
        endereco:true,
        bio:true,
        servico:{
          select:{
            id:true,
            nome:true
          }
        }
      }
    })

    return profissional
  }
}

export { ListaProfService}