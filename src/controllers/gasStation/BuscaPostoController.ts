import { Request, Response } from 'express'
import { BuscaPostoService } from '../../services/gasStation/BuscaPostoService'

class BuscaPostoController {
    async handle(req: Request, res: Response) {

        const userID = req.query.userID as string
        const buscaPostoService = new BuscaPostoService()

        const _gasStationID = await buscaPostoService.execute({userID})
        return res.json(_gasStationID)

    }
}

export { BuscaPostoController }