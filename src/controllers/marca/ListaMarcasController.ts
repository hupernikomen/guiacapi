import { Request, Response } from 'express'
import { ListaMarcasService } from '../../services/marca/ListaMarcasService'

class ListaMarcasController {
    async handle(req: Request, res: Response) {
        const listaMarcasService = new ListaMarcasService()

        const marcas = await listaMarcasService.execute()
        return res.json(marcas)

    }
}

export { ListaMarcasController }