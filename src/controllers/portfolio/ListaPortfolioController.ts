import { Request, Response } from 'express'
import { ListaPortfolioService } from '../../services/portfolio/ListaPortfolioService'


class ListarPortfolioController {
    async handle(req: Request, res: Response) {
      const profissionalID = req.query.profissionalID as string
        const listaPortfolioService = new ListaPortfolioService()

        const portfolio = await listaPortfolioService.execute({profissionalID})
        return res.json(portfolio)

    }
}

export { ListarPortfolioController }