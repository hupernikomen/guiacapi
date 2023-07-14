import { Request, Response } from 'express'
import { CriaBannerService } from '../../services/banner/CriaBannerService';

class CriaBannerController {
    async handle(req: Request, res: Response) {
      const lojaID = req.query.lojaID as string
        const { rota, id_rota } = req.body 

        const criaBannerService = new CriaBannerService();

        if (!req.file) {
          throw new Error("Ops.. algo deu errado!");
        } else {
          const file = req.file;

        const banner = await criaBannerService.execute({
          rota, 
          id_rota, 
          imagem: file, 
          lojaID
        })

        return res.json(banner)
      }
    }
}

export { CriaBannerController }