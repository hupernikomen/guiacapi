import { Request, Response } from 'express'
import { CriaSubCategoriaService } from '../../services/subcategory/CriaSubCategoriaService';

class CriaSubCategoriaController {
    async handle(req: Request, res: Response) {
        const categoryID = req.query.categoryID as string
        const { name } = req.body

        const criaSubCategoriaService = new CriaSubCategoriaService();

        const _category = await criaSubCategoriaService.execute({ name, categoryID })

        return res.json(_category)
    }
}

export { CriaSubCategoriaController }