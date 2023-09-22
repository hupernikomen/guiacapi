import { Request, Response } from 'express'
import { ListaCategoriaService } from '../../services/category/ListaCategoriaService'

class ListaCategoriaController {
    async handle(req: Request, res: Response) {

        const regionID = req.query.regionID as string

        const listaCategoriaService = new ListaCategoriaService()

        const _categories = await listaCategoriaService.execute({regionID})
        return res.json(_categories)
    }
}

export { ListaCategoriaController }