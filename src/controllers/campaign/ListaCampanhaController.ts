import { Request, Response } from 'express'
import { ListaCampanhaService } from '../../services/campaign/ListaCampanhaService'


class ListaCampanhaController {
    async handle(req: Request, res: Response) {
        const listaCampanhaService = new ListaCampanhaService()

        const _campaign = await listaCampanhaService.execute()
        return res.json(_campaign)

    }
}

export { ListaCampanhaController }