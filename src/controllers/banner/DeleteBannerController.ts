import { Request, Response } from 'express';
import { DeleteBannerService } from '../../services/banner/DeleteBannerService';

class DeleteBannerController {
  async handle(req: Request, res: Response) {
    const bannerID = req.query.bannerID as string;

    const deleteBannerService = new DeleteBannerService();
    await deleteBannerService.execute({ bannerID });

    return res.status(200).json({ message: 'Banner Excluido' });
  }
}

export { DeleteBannerController };
