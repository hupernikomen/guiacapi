import { Request, Response } from 'express'
import { BuscaPaymentBannerService } from '../../services/paymentBanner/BuscaPaymentService'


class BuscaPaymentBannerController {
    async handle(req: Request, res: Response) {

        const userID = req.query.userID as string

        const buscaPaymentBannerService = new BuscaPaymentBannerService()

        const _pay = await buscaPaymentBannerService.execute({ userID })
        return res.json(_pay)

    }
}

export { BuscaPaymentBannerController }