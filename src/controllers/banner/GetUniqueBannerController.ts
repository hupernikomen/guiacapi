import { Request, Response } from 'express';
import { GetUniqueBannerService } from '../../services/banner/GetUniqueBannerService';

class GetUniqueBannerController {
  async handle(req: Request, res: Response) {
    const bannerID = req.query.bannerID as string;
    const getUniqueBannerService = new GetUniqueBannerService();

    const banner = await getUniqueBannerService.execute({ bannerID });
    return res.json(banner);
  }
}

export { GetUniqueBannerController };
