import { Request, Response } from 'express';
import { BuscaPaymentBannerService } from '../../services/paymentBanner/BuscaPaymentService';

class BuscaPaymentBannerController {
  async handle(req: Request, res: Response) {
    const bannerID = req.query.bannerID as string;

    const buscaPaymentBannerService = new BuscaPaymentBannerService();

    const _pay = await buscaPaymentBannerService.execute({ bannerID });
    return res.json(_pay);
  }
}

export { BuscaPaymentBannerController };
