import { Request, Response } from 'express'
import { ListarPaymentBannerService } from '../../services/paymentBanner/ListarPaymentService'


class ListarPaymentBannerController {
    async handle(req: Request, res: Response) {

        const listarPaymentBannerService = new ListarPaymentBannerService()

        const _pay = await listarPaymentBannerService.execute()
        return res.json(_pay)

    }
}

export { ListarPaymentBannerController }