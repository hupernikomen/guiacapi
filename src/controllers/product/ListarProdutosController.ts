import { Request, Response } from 'express'
import { ListarProdutosService } from '../../services/product/ListarProdutosService'


class ListarProdutosController {
    async handle(req: Request, res: Response) {
        const regionID = req.query.regionID as string

        const listarProdutosService = new ListarProdutosService()

        const feed = await listarProdutosService.execute({
            regionID,
        })


        return res.json(feed)

    }
}

export { ListarProdutosController }