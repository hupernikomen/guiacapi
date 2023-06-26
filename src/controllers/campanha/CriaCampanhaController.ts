import { Request, Response } from 'express'
import { CriaCampanhaService } from '../../services/campanha/CriaCampanhaService'

class CriaCampanhaController {
    async handle(req: Request, res: Response) {
        const { nome, tema } = req.body

        const criaCampanhaService = new CriaCampanhaService();

        const campanha = await criaCampanhaService.execute({
            nome, 
            tema 
        })

        return res.json(campanha)
    }
}

export { CriaCampanhaController }