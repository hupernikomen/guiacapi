import { Request, Response } from 'express'
import { CriaBannerService } from '../../services/banner/CriaBannerService';

class CriaBannerController {
    async handle(req: Request, res: Response) {
      const lojaID = req.query.lojaID as string
        const { rota, id_rota, uri, } = req.body 

        const criaBannerService = new CriaBannerService();

        const banner = await criaBannerService.execute({
          rota, id_rota, uri, lojaID
        })

        return res.json(banner)
    }
}

export { CriaBannerController }