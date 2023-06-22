import prismaClient from "../../prisma";

interface ProductRequest {
  servicoID: string;
}

class PorProfissaoService {
  async execute({ servicoID }: ProductRequest) {
    const categoria = await prismaClient.profissional.findMany({
      where: {
        servicoID,
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
