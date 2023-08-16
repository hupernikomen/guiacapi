import prismaClient from "../../prisma";

interface listaPortfolioRequest {
  profissionalID: string
}


class ListaPortfolioService {
  async execute({
    profissionalID
  }: listaPortfolioRequest) {

    const portfolio = await prismaClient.portfolio.findMany({
      where: {
        profissionalID
      },
      select: {
        id: true,
        imagem: true

      }
    })

    return portfolio
  }
}

export { ListaPortfolioService }