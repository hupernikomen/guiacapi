import prismaClient from "../../prisma";

interface portfolioRequest {
  personID: string,
  image:object
}

class CriaPortfolioService {

  async execute({
    image,
    personID

  }: portfolioRequest) {

    const _portfolio = await prismaClient.portfolio.create({
      data: {
        image,
        personID
      }
    })

    return _portfolio
  }
}

export { CriaPortfolioService }