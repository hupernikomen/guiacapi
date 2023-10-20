import { Request, Response } from 'express'
import { ListarBannersService } from '../../services/banner/ListarBannersService'


class ListarBannersController {
    async handle(req: Request, res: Response) {
        const listarBannersService = new ListarBannersService()

        const banners = await listarBannersService.execute()
        return res.json(banners)

    }
}

export { ListarBannersController }