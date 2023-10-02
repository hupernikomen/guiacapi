import { Request, Response } from 'express'
import { ListaMarcasService } from '../../services/brand/ListaMarcasService'

class ListaMarcasController {
    async handle(req: Request, res: Response) {

        const regionID = req.query.regionID as string

        const listaMarcasService = new ListaMarcasService()

        const _brand = await listaMarcasService.execute({ regionID })
        return res.json(_brand)

    }
}

export { ListaMarcasController }