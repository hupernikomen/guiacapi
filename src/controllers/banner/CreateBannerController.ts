import { Request, Response } from 'express';
import { CreateBannerService } from '../../services/banner/CreateBannerService';

class CreateBannerController {
  async handle(req: Request, res: Response) {
    const userID = req.query.userID as string;
    const { route, paramsID, link, typebanner, categoryID } = req.body;

    if (!req.file) throw new Error('Falha ao enviar banner');

    const createBannerService = new CreateBannerService();
    const banner = await createBannerService.execute({
      image: req.file,
      route,
      paramsID,
      userID,
      link,
      typebanner,
      categoryID
    });

    if (!banner) throw new Error('Erro ao criar banner - API');
    return res.status(200).json({ message: 'Criado com Sucesso', id: banner.id });
  }
}

export { CreateBannerController };
