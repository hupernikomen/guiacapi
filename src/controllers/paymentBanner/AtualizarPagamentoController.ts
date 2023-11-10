import { Request, Response } from 'express'
import { AtualizarPagamentoBannerService } from '../../services/paymentBanner/AtualizaPagamentoService';

class AtualizarPagamentoBannerController {
    async handle(req: Request, res: Response) {
        const paymentID = req.query.paymentID as string
        const {
          value,
          dataPayment,
        } = req.body

        const atualizarPagamentoBannerService = new AtualizarPagamentoBannerService();

        const _pay = await atualizarPagamentoBannerService.execute({
          value,
          dataPayment,
          paymentID

        })

        return res.json(_pay)
    }
}

export { AtualizarPagamentoBannerController }