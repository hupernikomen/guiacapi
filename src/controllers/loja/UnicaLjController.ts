import { Request, Response } from 'express'
import { UnicaLjService } from '../../services/loja/UnicaLjService'


class UnicaLjController {
    async handle(req: Request, res: Response) {

        const loja_ID = req.loja_ID

        const unicaLjService = new UnicaLjService()

        const loja = await unicaLjService.execute(loja_ID)
        return res.json(loja)

    }
}

export { UnicaLjController }