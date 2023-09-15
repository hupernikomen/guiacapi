import prismaClient from "../../prisma";

interface listaPortfolioRequest {
  personID: string
}


class ListaPortfolioService {
  async execute({
    personID
  }: listaPortfolioRequest) {

    const portfolio = await prismaClient.portfolio.findMany({
      where: {
        personID
      },
      select: {
        id: true,
        image: true

      }
    })

    return portfolio
  }
}

export { ListaPortfolioService }