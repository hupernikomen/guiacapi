import { Request, Response } from 'express'
import { PorCategoriaProdutoService } from '../../services/produto/PorCategoriaProdutoService'


class PorCategoriaProdutoController {
    async handle(req: Request, res: Response) {
        const categoriaID = req.query.categoriaID as string

        const porCategoriaProdutoService = new PorCategoriaProdutoService()

        const produto = await porCategoriaProdutoService.execute({
            categoriaID
        })

        return res.json(produto)
    }
}

export { PorCategoriaProdutoController }