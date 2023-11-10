import { Request, Response } from "express";
import { CriaPaymentBannerService } from "../../services/paymentBanner/CriarPagamentoService";

class CriaPaymentBannerController {
  async handle(req: Request, res: Response) {
    const criaPaymentBannerService = new CriaPaymentBannerService();

    const userID = req.query.userID as string
    const { value, dataPayment } = req.body;

    const _payment = await criaPaymentBannerService.execute({
      userID,
      value,
      dataPayment,
    })

    return res.status(200).json(_payment);




  }
}

export { CriaPaymentBannerController };
