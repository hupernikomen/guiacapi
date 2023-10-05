import prismaClient from "../../prisma";

interface portfolioRequest {
  personID: string,
  image:object,
  comments:string
}

class CriaPortfolioService {

  async execute({
    image,
    personID,
    comments

  }: portfolioRequest) {

    const _portfolio = await prismaClient.portfolio.create({
      data: {
        image,
        personID,
        comments
      }
    })

    return _portfolio
  }
}

export { CriaPortfolioService }