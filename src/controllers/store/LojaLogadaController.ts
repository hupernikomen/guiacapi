import { Request, Response } from 'express'
import { LojaLogadaService } from '../../services/store/LojaLogadaService'

class LojaLogadaController {

    async handle(req: Request, res: Response) {

        const userID = req.query.userID as string
        const lojaLogadaService = new LojaLogadaService();

        const _store = await lojaLogadaService.execute({ userID })

        return res.json(_store)
    }
}

export { LojaLogadaController }