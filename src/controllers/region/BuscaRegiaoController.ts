import { Request, Response } from 'express'
import { BuscaRegiaoService } from '../../services/region/BuscaRegiaoService'

class BuscaRegiaoController {
    async handle(req: Request, res: Response) {

        const regionID = req.query.regionID as string
        const buscaRegiaoService = new BuscaRegiaoService()

        const _region = await buscaRegiaoService.execute({ regionID })
        return res.json(_region)

    }
}

export { BuscaRegiaoController }