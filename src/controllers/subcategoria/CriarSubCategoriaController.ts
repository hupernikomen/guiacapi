import { Request, Response } from 'express'
import { CriarSubCategoriaService } from '../../services/subcategoria/CriarSubCategoriaService'

class CriarSubCategoriaController {
    async handle(req: Request, res: Response) {

        const { nome, categoriaID } = req.body

        const criarSubCategoriaService = new CriarSubCategoriaService();

        const subcategoria = await criarSubCategoriaService.execute({
            nome,
            categoriaID
        })

        return res.json(subcategoria)
    }
}

export { CriarSubCategoriaController }