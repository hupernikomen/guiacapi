import { Request, Response } from 'express';
import { BuscaPaymentBannerService } from '../../services/paymentBanner/BuscaPaymentService';

class BuscaPaymentBannerController {
  async handle(req: Request, res: Response) {
    const userID = req.query.userID as string;
    const bannerID = req.query.bannerID as string;

    const buscaPaymentBannerService = new BuscaPaymentBannerService();

    const _pay = await buscaPaymentBannerService.execute({ userID, bannerID });
    return res.json(_pay);
  }
}

export { BuscaPaymentBannerController };
