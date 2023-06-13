import { Request, Response } from 'express'
import { FeedProdutosService } from '../../services/produto/FeedProdutosService'


class FeedProdutosControlller {
    async handle(req: Request, res: Response) {
        const feedProdutosService = new FeedProdutosService()

        const feed = await feedProdutosService.execute()
        return res.json(feed)

    }
}

export { FeedProdutosControlller  }