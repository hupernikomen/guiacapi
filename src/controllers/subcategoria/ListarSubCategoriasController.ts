import { Request, Response } from 'express'
import { ListarSubCategoriasService } from '../../services/subcategoria/ListarSubCategoriasService'


class ListarSubCategoriasController {
    async handle(req: Request, res: Response) {

        const categoriaID = req.query.categoriaID as string
        const listarSubCategoriasService = new ListarSubCategoriasService()

        const subcategorias = await listarSubCategoriasService.execute({
            categoriaID
        })
        return res.json(subcategorias)

    }
}

export { ListarSubCategoriasController }