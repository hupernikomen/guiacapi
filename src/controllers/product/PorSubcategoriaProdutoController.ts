import { Request, Response } from 'express'
import { PorSubcategoriaProdutoService } from '../../services/product/PorSubcategoriaProdutoService'

class PorSubcategoriaProdutoController {
    async handle(req: Request, res: Response) {
        const subcategoryID = req.query.subcategoryID as string
        const regionID = req.query.regionID as string

        const porSubcategoriaProdutoService = new PorSubcategoriaProdutoService()
        const _product = await porSubcategoriaProdutoService.execute({ subcategoryID, regionID })
        return res.json(_product)
    }
}

export { PorSubcategoriaProdutoController }