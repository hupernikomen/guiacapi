import { Request, Response } from 'express'
import { BuscaPaymentService } from '../../services/payment/BuscaPaymentService'


class BuscaPaymentController {
    async handle(req: Request, res: Response) {

        const paymentID = req.query.paymentID as string

        const buscaPaymentService = new BuscaPaymentService()

        const _pay = await buscaPaymentService.execute({ paymentID })
        return res.json(_pay)

    }
}

export { BuscaPaymentController }