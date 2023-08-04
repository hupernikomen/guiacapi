import { Request, Response } from 'express'
import { BuscaSubcategoriaService } from '../../services/subcategoria/BuscaSubCategoriaService'


class BuscaSubcategoriaController {
    async handle(req: Request, res: Response) {

        const subcategoriaID = req.query.subcategoriaID as string

        const buscaSubcategoriaService = new BuscaSubcategoriaService()

        const subcategoria = await buscaSubcategoriaService.execute({
            subcategoriaID
        })
        return res.json(subcategoria)

    }
}

export { BuscaSubcategoriaController }