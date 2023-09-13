import { Request, Response } from 'express'
import { PorSubcategoriaProdutoService } from '../../services/produto/PorSubcategoriaProdutoService'

class PorSubcategoriaProdutoController {
    async handle(req: Request, res: Response) {
        const subcategoriaID = req.query.subcategoriaID as string

        const porSubcategoriaProdutoService = new PorSubcategoriaProdutoService()
        const produto = await porSubcategoriaProdutoService.execute({subcategoriaID})
        return res.json(produto)
    }
}

export { PorSubcategoriaProdutoController }