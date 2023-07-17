import { Request, Response } from 'express'
import { CriaBannerService } from '../../services/banner/CriaBannerService';

class CriaBannerController {
  async handle(req: Request, res: Response) {
    const lojaID = req.query.lojaID as string
    const { rota, id_rota } = req.body

    const criaBannerService = new CriaBannerService();

    if (!req.file) {
      throw new Error("Falha ao enviar baanner");
    }

    const banner = await criaBannerService.execute({
      rota,
      id_rota,
      imagem: req.file,
      lojaID
    })

    return res.json(banner)
  }
}

export { CriaBannerController }