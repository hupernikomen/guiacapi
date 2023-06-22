import prismaClient from "../../prisma";

interface ProductRequest {
  profissaoID: string;
}

class PorProfissaoService {
  async execute({ profissaoID }: ProductRequest) {
    const categoria = await prismaClient.profissional.findMany({
      where: {
        id: profissaoID,
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
        portfolio: true,
        listaServicos: true,
        aDomicilio: true,
        endereco: true,
        bio: true,
        servico: {
          select: {
            id: true,
            nome: true
          }
        }
      }
    });

    return categoria;
  }
}

export { PorProfissaoService };
