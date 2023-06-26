import { Request, Response } from 'express'
import { ListaCategoriaService } from '../../services/categoria/ListaCategoriaService'


class ListaCategoriaController {
    async handle(req: Request, res: Response) {
        const listaCategoriaService = new ListaCategoriaService()

        const categorias = await listaCategoriaService.execute()
        return res.json(categorias)

    }
}

export { ListaCategoriaController }