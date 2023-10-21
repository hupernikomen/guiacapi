import { Request, Response } from 'express'
import { BuscaBannerService } from '../../services/banner/BuscaBannerService'


class BuscaBannerController {
    async handle(req: Request, res: Response) {

        const userID = req.query.userID as string

        const buscaBannerService = new BuscaBannerService()

        const banner = await buscaBannerService.execute({ userID })
        return res.json(banner)

    }
}

export { BuscaBannerController }