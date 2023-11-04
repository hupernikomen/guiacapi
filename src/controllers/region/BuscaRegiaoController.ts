import { Request, Response } from 'express'
import { BuscaRegiaoService } from '../../services/region/BuscaRegiaoService'

class BuscaRegiaoController {
    async handle(req: Request, res: Response) {

        const regionName = req.query.regionName as string
        const buscaRegiaoService = new BuscaRegiaoService()

        const _region = await buscaRegiaoService.execute({ regionName })
        return res.json(_region)

    }
}

export { BuscaRegiaoController }