import { Request, Response } from 'express'
import { ListaSubCategoriasService } from '../../services/subcategory/ListaSubCategoriasService'


class ListaSubCategoriaController {
    async handle(req: Request, res: Response) {
        const categoryID = req.query.categoryID as string

        const listaSubCategoriasService = new ListaSubCategoriasService()

        const _subcategory = await listaSubCategoriasService.execute({categoryID})
        return res.json(_subcategory)

    }
}

export { ListaSubCategoriaController }