import { Request, Response } from 'express'
import { BuscaPostoService } from '../../services/fuelStation/BuscaPostoService'

class BuscaPostoController {
    async handle(req: Request, res: Response) {

        const userID = req.query.userID as string
        const buscaPostoService = new BuscaPostoService()

        const _fuelStationID = await buscaPostoService.execute({userID})
        return res.json(_fuelStationID)

    }
}

export { BuscaPostoController }