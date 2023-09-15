import { Request, Response } from 'express'
import { ListarProdutosService } from '../../services/product/ListarProdutosService'


class ListarProdutosController {
    async handle(req: Request, res: Response) {

        const listarProdutosService = new ListarProdutosService()

        const feed = await listarProdutosService.execute()
        return res.json(feed)

    }
}

export { ListarProdutosController  }