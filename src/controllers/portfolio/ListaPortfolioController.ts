import { Request, Response } from 'express'
import { ListaPortfolioService } from '../../services/portfolio/ListaPortfolioService'


class ListarPortfolioController {
    async handle(req: Request, res: Response) {
      const personID = req.query.personID as string
        const listaPortfolioService = new ListaPortfolioService()

        const _portfolio = await listaPortfolioService.execute({personID})
        return res.json(_portfolio)

    }
}

export { ListarPortfolioController }