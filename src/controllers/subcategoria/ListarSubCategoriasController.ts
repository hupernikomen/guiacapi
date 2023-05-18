import { Request, Response } from 'express'
import { ListarSubCategoriasService } from '../../services/subcategoria/ListarSubCategoriasService'


class ListarSubCategoriasController {
    async handle(req: Request, res: Response) {
        const listarSubCategoriasService = new ListarSubCategoriasService()

        const subcategorias = await listarSubCategoriasService.execute()
        return res.json(subcategorias)

    }
}

export { ListarSubCategoriasController }