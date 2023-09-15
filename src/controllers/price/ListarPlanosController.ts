import { Request, Response } from 'express'
import { ListarPlanosService } from '../../services/price/ListarPlanosService'


class ListarPlanosController {
    async handle(req: Request, res: Response) {
        const listarPlanosService = new ListarPlanosService()

        const planos = await listarPlanosService.execute()
        return res.json(planos)

    }
}

export { ListarPlanosController }