import { Request, Response } from 'express'
import { ListaCampanhaService } from '../../services/campanha/ListaCampanhaService'


class ListaCampanhaController {
    async handle(req: Request, res: Response) {
        const listaCampanhaService = new ListaCampanhaService()

        const campanhas = await listaCampanhaService.execute()
        return res.json(campanhas)

    }
}

export { ListaCampanhaController }