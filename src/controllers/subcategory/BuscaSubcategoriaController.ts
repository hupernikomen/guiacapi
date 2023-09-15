import { Request, Response } from 'express'
import { BuscaSubcategoriaService } from '../../services/subcategory/BuscaSubCategoriaService'


class BuscaSubcategoriaController {
    async handle(req: Request, res: Response) {

        const subcategoryID = req.query.subcategoryID as string

        const buscaSubcategoriaService = new BuscaSubcategoriaService()

        const _subcategory = await buscaSubcategoriaService.execute({
            subcategoryID
        })
        return res.json(_subcategory)

    }
}

export { BuscaSubcategoriaController }