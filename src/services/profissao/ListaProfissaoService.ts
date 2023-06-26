import prismaClient from "../../prisma";

class ListaProfissaoService {
  async execute() {

    const servico = await prismaClient.profissao.findMany({
      select: {
        id: true,
        nome: true,
        avatar: true,
        _count: true,

      }
    })

    return servico
  }
}

export { ListaProfissaoService }