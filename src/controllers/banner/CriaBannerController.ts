import { Request, Response } from 'express'
import { CriaBannerService } from '../../services/banner/CriaBannerService';

class CriaBannerController {
  async handle(req: Request, res: Response) {
    const lojaID = req.query.lojaID as string
    const { link, params  } = req.body

    const criaBannerService = new CriaBannerService();

    if (!req.file) {
      throw new Error("Falha ao enviar baanner");
    }

    const banner = await criaBannerService.execute({
      link,
      params,
      imagem: req.file,
      lojaID
    })

    return res.json(banner)
  }
}

export { CriaBannerController }