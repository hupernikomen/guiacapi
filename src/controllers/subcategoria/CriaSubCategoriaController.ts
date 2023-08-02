import { Request, Response } from 'express'
import { CriaSubCategoriaService } from '../../services/subcategoria/CriaSubCategoriaService';

class CriaSubCategoriaController {
    async handle(req: Request, res: Response) {
        const categoriaID = req.query.categoriaID as string
        const { nome } = req.body

        const criaSubCategoriaService = new CriaSubCategoriaService();

        const categoria = await criaSubCategoriaService.execute({ nome, categoriaID })

        return res.json(categoria)
    }
}

export { CriaSubCategoriaController }