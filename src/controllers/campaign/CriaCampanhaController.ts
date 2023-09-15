import { Request, Response } from 'express'
import { CriaCampanhaService } from '../../services/campaign/CriaCampanhaService'

class CriaCampanhaController {
    async handle(req: Request, res: Response) {
        const { name, theme } = req.body

        const criaCampanhaService = new CriaCampanhaService();

        const _campaign = await criaCampanhaService.execute({
            name, 
            theme 
        })

        return res.json(_campaign)
    }
}

export { CriaCampanhaController }