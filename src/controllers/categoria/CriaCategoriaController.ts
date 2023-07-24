import { Request, Response } from 'express'
import { CriaCategoriaService } from '../../services/categoria/CriaCategoriaService'

class CriaCategoriaController {
    async handle(req: Request, res: Response) {
        const { nome } = req.body

        const criaCategoriaService = new CriaCategoriaService();

        const categoria = await criaCategoriaService.execute({ nome })

        return res.json(categoria)
    }
}

export { CriaCategoriaController }