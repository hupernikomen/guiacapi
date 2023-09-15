import { Request, Response } from 'express'
import { ListaMarcasService } from '../../services/brand/ListaMarcasService'

class ListaMarcasController {
    async handle(req: Request, res: Response) {
        const listaMarcasService = new ListaMarcasService()

        const _brand = await listaMarcasService.execute()
        return res.json(_brand)

    }
}

export { ListaMarcasController }