import { Request, Response } from 'express'
import { CriaBannerService } from '../../services/banner/CriaBannerService';

class CriaBannerController {
  async handle(req: Request, res: Response) {

    const userID = req.query.userID as string
    const { route, paramsID } = req.body

    if (!req.file) throw new Error("Falha ao enviar banner");

    const criaBannerService = new CriaBannerService();
    const banner = await criaBannerService.execute({
      image: req.file,
      route,
      paramsID,
      userID,
    })

    if (!banner) throw new Error("Erro ao criar banner - API");
    return res.status(200).json({ message: "Criado com Sucesso", "id": banner.id })
  }
}

export { CriaBannerController }