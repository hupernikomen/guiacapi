import { Request, Response } from 'express'
import { ListaCategoriaService } from '../../services/category/ListaCategoriaService'

class ListaCategoriaController {
    async handle(req: Request, res: Response) {
        const listaCategoriaService = new ListaCategoriaService()

        const _categories = await listaCategoriaService.execute()
        return res.json(_categories)
    }
}

export { ListaCategoriaController }