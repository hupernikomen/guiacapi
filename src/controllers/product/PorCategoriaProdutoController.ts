import { Request, Response } from 'express'
import { PorCategoriaProdutoService } from '../../services/product/PorCategoriaProdutoService'
import { shuffle } from 'lodash';

class PorCategoriaProdutoController {
    async handle(req: Request, res: Response) {
        const categoryID = req.query.categoryID as string
        const regionID = req.query.regionID as string

        const porCategoriaProdutoService = new PorCategoriaProdutoService()
        const _product = await porCategoriaProdutoService.execute({ categoryID, regionID })

        const shuffledResults = shuffle(_product);
        return res.json(shuffledResults)
    }
}

export { PorCategoriaProdutoController }