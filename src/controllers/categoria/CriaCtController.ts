import { Request, Response } from 'express'
import { CriaCtService } from '../../services/categoria/CriaCtService'

class CriaCtController {
    async handle(req: Request, res: Response) {
        const { nome } = req.body

        const criaCtService = new CriaCtService();

        const category = await criaCtService.execute({
            nome: nome
        })

        return res.json(category)
    }
}

export { CriaCtController }