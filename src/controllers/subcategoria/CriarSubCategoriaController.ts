import { Request, Response } from 'express'
import { CriarSubCategoriaService } from '../../services/subcategoria/CriarSubCategoriaService'

class CriarSubCategoriaController {
    async handle(req: Request, res: Response) {

        const { nome } = req.body
        const categoriaID = req.query.categoriaID as string

        const criarSubCategoriaService = new CriarSubCategoriaService();

        const subcategoria = await criarSubCategoriaService.execute({
            nome,
            categoriaID
        })

        return res.json(subcategoria)
    }
}

export { CriarSubCategoriaController }