import { Request, Response } from 'express';
import { UpdateBannerService } from '../../services/banner/UpdateBannerService';

class UpdateBannerController {
  async handle(req: Request, res: Response) {
    const userID = req.query.userID as string;
    const { route, paramsID } = req.body;

    if (!req.file) throw new Error('Falha ao enviar banner');

    const updateBannerService = new UpdateBannerService();

    const _banner = await updateBannerService.execute({
      image: req.file,
      route,
      paramsID,
      userID
    });

    return res.json(_banner);
  }
}

export { UpdateBannerController };
