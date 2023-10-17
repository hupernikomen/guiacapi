import { Request, Response } from 'express'
import { ListarPaymentService } from '../../services/payment/ListarPaymentService'


class ListarPaymentController {
    async handle(req: Request, res: Response) {

        const paymentID = req.query.paymentID as string

        const listarPaymentService = new ListarPaymentService()

        const _pay = await listarPaymentService.execute({ paymentID })
        return res.json(_pay)

    }
}

export { ListarPaymentController }