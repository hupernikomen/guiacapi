import { Request, Response } from 'express'
import { ListarPaymentService } from '../../services/payment/ListarPaymentService'


class ListarPaymentController {
    async handle(req: Request, res: Response) {

        const listarPaymentService = new ListarPaymentService()

        const _pay = await listarPaymentService.execute()
        return res.json(_pay)

    }
}

export { ListarPaymentController }