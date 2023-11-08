import { Request, Response } from 'express'
import { PorSubcategoriaProdutoService } from '../../services/product/PorSubcategoriaProdutoService'
import { shuffle } from 'lodash';

class PorSubcategoriaProdutoController {
    async handle(req: Request, res: Response) {
        const subcategoryID = req.query.subcategoryID as string
        const regionID = req.query.regionID as string

        const porSubcategoriaProdutoService = new PorSubcategoriaProdutoService()
        const _product = await porSubcategoriaProdutoService.execute({ subcategoryID, regionID })

        const shuffledResults = shuffle(_product);
        return res.json(shuffledResults)
    }
}

export { PorSubcategoriaProdutoController }