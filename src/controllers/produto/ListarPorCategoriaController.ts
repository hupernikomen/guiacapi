import { Request, Response } from 'express'
import { PorCategoriaPdtService } from '../../services/produto/PorCategoriaPdtService'


class ListarPorCategoriaController {
    async handle(req: Request, res: Response) {
        const categoriaID = req.query.categoriaID as string

        const porCategoriaPdtService = new PorCategoriaPdtService()

        const produto = await porCategoriaPdtService.execute({
            categoriaID
        })

        return res.json(produto)
    }
}

export { ListarPorCategoriaController }