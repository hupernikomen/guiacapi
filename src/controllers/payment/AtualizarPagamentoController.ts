import { Request, Response } from 'express'
import { AtualizarPagamentoService } from '../../services/payment/AtualizaPagamentoService';

class AtualizarPagamentoController {
    async handle(req: Request, res: Response) {
        const paymentID = req.query.paymentID as string
        const {
          value,
          datePayment,
        } = req.body

        const atualizarPagamentoService = new AtualizarPagamentoService();

        const _pay = await atualizarPagamentoService.execute({
          value,
          datePayment,
          paymentID

        })

        return res.json(_pay)
    }
}

export { AtualizarPagamentoController }