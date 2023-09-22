import { Request, Response } from 'express'
import { ListarBannersService } from '../../services/banner/ListarBannersService'


class ListarBannersController {
    async handle(req: Request, res: Response) {
        const regionID = req.query.regionID as string
        const listarBannersService = new ListarBannersService()

        const banners = await listarBannersService.execute({regionID})
        return res.json(banners)

    }
}

export { ListarBannersController }