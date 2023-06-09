import prismaClient from "../../prisma";

interface ProductRequest {
  profissaoID: string;
}

class PorProfissaoService {
  async execute({
    profissaoID
  }: ProductRequest) {

    const categoria = await prismaClient.profissional.findMany({
      where: {
        usuario: {
          status: true
        },
        profissaoID,
      },
      
      select: {
        id: true,
        avatar: true,
        nome: true,
        album: true,
        lista_servicos: true,
        endereco: true,
        bio: true,

      }
    });

    return categoria;
  }
}

export { PorProfissaoService };
