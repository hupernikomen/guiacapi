import { Request, Response } from 'express'
import { CriaBannerService } from '../../services/banner/CriaBannerService';

class CriaBannerController {
  async handle(req: Request, res: Response) {

    const lojaID = req.query.lojaID as string
    const { link, params } = req.body

    if (!req.file) throw new Error("Falha ao enviar baanner");

    const criaBannerService = new CriaBannerService();
    const banner = await criaBannerService.execute({
      link,
      params,
      imagem: req.file,
      lojaID
    })

    if(!banner) throw new Error("Erro ao criar banner - API");
    return res.status(200).json({message: "Criado com Sucesso"})
  }
}

export { CriaBannerController }