import { Request, Response } from "express";
import { CriaPaymentBannerService } from "../../services/paymentBanner/CriarPagamentoService";

class CriaPaymentBannerController {
  async handle(req: Request, res: Response) {
    const criaPaymentBannerService = new CriaPaymentBannerService();

    const bannerID = req.query.bannerID as string
    const { value, expiration } = req.body;

    const _payment = await criaPaymentBannerService.execute({
      bannerID,
      value,
      expiration,
    })

    return res.status(200).json(_payment);




  }
}

export { CriaPaymentBannerController };
