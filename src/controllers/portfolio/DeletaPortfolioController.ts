import { Request, Response } from 'express'

import { DeletaPortfolioService } from '../../services/portfolio/DeletarPortfolioService'

class DeletaPortfolioController {
  async handle(req: Request, res: Response) {
    const portfolioID = req.query.portfolioID as string

    const deletaPortfolioService = new DeletaPortfolioService()

    await deletaPortfolioService.execute({
      portfolioID
    })

    return res.status(200).json({
      message: "Fique tranquilo! Já excluimos sua imagem"
    })

  }
}

export { DeletaPortfolioController }