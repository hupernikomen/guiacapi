import { Request, Response } from 'express'
import { DetalhePdtService } from '../../services/produto/DetalhePdtService'


class DetalheProdutoController {
    async handle(req: Request, res: Response) {

        const produtoID = req.query.produtoID as string

        const detalhePdtService = new DetalhePdtService()

        const produto = await detalhePdtService.execute({
            produtoID
        })
        return res.json(produto)

    }
}

export { DetalheProdutoController }