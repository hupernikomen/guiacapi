import { Request, Response } from 'express'
import { CriaCampService } from '../../services/campanha/CriaCampService'

class CriaCampController {
    async handle(req: Request, res: Response) {
        const { nome, tema, status } = req.body

        const criaCampService = new CriaCampService();

        const campanha = await criaCampService.execute({
            nome, tema, status 
        })

        return res.json(campanha)
    }
}

export { CriaCampController }