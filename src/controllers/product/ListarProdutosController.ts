import { Request, Response } from 'express'
import { ListarProdutosService } from '../../services/product/ListarProdutosService'
import { shuffle } from 'lodash';

class ListarProdutosController {
    async handle(req: Request, res: Response) {
        const regionID = req.query.regionID as string

        const listarProdutosService = new ListarProdutosService()

        const feed = await listarProdutosService.execute({
            regionID,
        })

        const shuffledResults = shuffle(feed);
        return res.json(shuffledResults)

    }
}

export { ListarProdutosController }