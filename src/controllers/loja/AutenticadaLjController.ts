import { Request, Response } from 'express'
import { AutenticadaLjService } from '../../services/loja/AutenticadaLjService'

class AutenticadaLjController {

    async handle(req: Request, res: Response) {

        const loja_ID = req.loja_ID

        const autenticadaLjService = new AutenticadaLjService();

        const me = await autenticadaLjService.execute(loja_ID)

        return res.json(me)
    }
}

export { AutenticadaLjController }