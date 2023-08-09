import prismaClient from "../../prisma";

class ListaProfissaoService {
  async execute() {

    const profissao = await prismaClient.profissao.findMany({
      select: {
        id: true,
        nome: true,
        _count: true,

      }
    })

    return profissao
  }
}

export { ListaProfissaoService }