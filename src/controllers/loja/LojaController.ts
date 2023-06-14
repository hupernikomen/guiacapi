import { Request, Response } from 'express'
import { LojaService } from '../../services/loja/LojaService'


class LojaController {
    async handle(req: Request, res: Response) {

        const lojaID = req.query.lojaID as string

        const lojaService = new LojaService()

        const loja = await lojaService.execute({
            lojaID
        })
        return res.json(loja)

    }
}

export { LojaController }