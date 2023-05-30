import { Request, Response } from 'express'
import { MeLojaService } from '../../services/loja/MeLojaService'

class MeLojaController {

    async handle(req: Request, res: Response) {

        const loja_ID = req.loja_ID

        const meLojaService = new MeLojaService();

        const me = await meLojaService.execute(loja_ID)

        return res.json(me)
    }
}

export { MeLojaController }