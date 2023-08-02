import { Request, Response } from 'express'
import { ListaSubCategoriasService } from '../../services/subcategoria/ListaSubCategoriasService'


class ListaSubCategoriaController {
    async handle(req: Request, res: Response) {
        const categoriaID = req.query.categoriaID as string

        const listaSubCategoriasService = new ListaSubCategoriasService()

        const subcategorias = await listaSubCategoriasService.execute({categoriaID})
        return res.json(subcategorias)

    }
}

export { ListaSubCategoriaController }