import prismaClient from "../../prisma";

interface portfolioRequest {
  profissionalID: string,
  imagem:object
}

class CriaPortfolioService {

  async execute({
    imagem,
    profissionalID

  }: portfolioRequest) {

    const portfolio = await prismaClient.portfolio.create({
      data: {
        imagem,
        profissionalID
      }
    })

    return portfolio
  }
}

export { CriaPortfolioService }