import { Request, Response } from 'express'
import { ListaCampService } from '../../services/campanha/ListaCampService'


class ListaCampController {
    async handle(req: Request, res: Response) {
        const listaCampService = new ListaCampService()

        const campanhas = await listaCampService.execute()
        return res.json(campanhas)

    }
}

export { ListaCampController }