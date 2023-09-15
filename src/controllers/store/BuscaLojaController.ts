import { Request, Response } from 'express'
import { BuscaLojaService } from '../../services/store/BuscaLojaService'

class BuscaLojaController {
    async handle(req: Request, res: Response) {

        const userID = req.query.userID as string
        const buscaLojaService = new BuscaLojaService()

        const _store = await buscaLojaService.execute({ userID })
        return res.json(_store)

    }
}

export { BuscaLojaController }