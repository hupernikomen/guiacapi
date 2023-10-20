import { Request, Response } from 'express'
import { BuscaPaymentService } from '../../services/payment/BuscaPaymentService'


class BuscaPaymentController {
    async handle(req: Request, res: Response) {

        const userID = req.query.userID as string

        const buscaPaymentService = new BuscaPaymentService()

        const _pay = await buscaPaymentService.execute({ userID })
        return res.json(_pay)

    }
}

export { BuscaPaymentController }