import { Request, Response } from 'express'
import { ListarBannersService } from '../../services/banner/ListarBannersService'
import { shuffle } from 'lodash';

class ListarBannersController {
    async handle(req: Request, res: Response) {

        const listarBannersService = new ListarBannersService()

        const banners = await listarBannersService.execute()

        const shuffledResults = shuffle(banners);
        return res.json(shuffledResults)

    }
}

export { ListarBannersController }