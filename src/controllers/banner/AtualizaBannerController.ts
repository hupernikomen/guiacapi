import { Request, Response } from 'express'
import { AtualizarBannerService } from '../../services/banner/AtualizarBannerService';

class AtualizarBannerController {
    async handle(req: Request, res: Response) {
        const userID = req.query.userID as string
        const {
          route, paramsID
        } = req.body

        if (!req.file) throw new Error("Falha ao enviar banner");

        const atualizarBannerService = new AtualizarBannerService();

        const _banner = await atualizarBannerService.execute({
          image: req.file,
          route,
          paramsID,
          userID,

        })

        return res.json(_banner)
    }
}

export { AtualizarBannerController }