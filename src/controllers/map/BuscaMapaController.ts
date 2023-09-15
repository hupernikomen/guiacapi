import { Request, Response } from 'express'
import { BuscaMapaService } from '../../services/map/BuscaMapaService'


class BuscaMapaController {
    async handle(req: Request, res: Response) {

        const userID = req.query.userID as string

        const buscaMapaService = new BuscaMapaService()
        const _map = await buscaMapaService.execute({userID})

        return res.json(_map)

    }
}

export { BuscaMapaController }