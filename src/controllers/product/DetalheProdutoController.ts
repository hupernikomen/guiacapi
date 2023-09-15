import { Request, Response } from 'express'
import { DetalheProdutoService } from '../../services/product/DetalheProdutoService'

class DetalheProdutoController {
    async handle(req: Request, res: Response) {

        const productID = req.query.productID as string

        const detalheProdutoService = new DetalheProdutoService()
        const _product = await detalheProdutoService.execute({productID})
        return res.json(_product)
    }
}

export { DetalheProdutoController }