import { Request, Response } from 'express'
import { UnicaLjService } from '../../services/loja/UnicaLjService'


class UnicaLjController {
    async handle(req: Request, res: Response) {

        const lojaID = req.query.lojaID as string

        const unicaLjService = new UnicaLjService()

        const loja = await unicaLjService.execute({
            lojaID
        })
        return res.json(loja)

    }
}

export { UnicaLjController }