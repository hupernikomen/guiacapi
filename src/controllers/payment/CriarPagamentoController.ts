import { Request, Response } from "express";
import { CriaPaymentService } from "../../services/payment/CriarPagamentoService";

class CriaPaymentController {
  async handle(req: Request, res: Response) {
    const criaPaymentService = new CriaPaymentService();

    const userID = req.query.userID as string
    const { value, expiration, paymentOf } = req.body;

    const _payment = await criaPaymentService.execute({
      userID,
      value,
      expiration,
      paymentOf
    })

    return res.status(200).json(_payment);




  }
}

export { CriaPaymentController };
