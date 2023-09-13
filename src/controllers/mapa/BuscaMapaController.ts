import { Request, Response } from 'express'
import { BuscaMapaService } from '../../services/mapa/BuscaMapaService'


class BuscaMapaController {
    async handle(req: Request, res: Response) {

        const usuarioID = req.query.usuarioID as string

        const buscaMapaService = new BuscaMapaService()
        const mapa = await buscaMapaService.execute({usuarioID})

        return res.json(mapa)

    }
}

export { BuscaMapaController }