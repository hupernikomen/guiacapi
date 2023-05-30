import { Request, Response } from 'express'
import { ListaPdtService } from '../../services/produto/ListaPdtService'


class ListarProdutosController {
    async handle(req: Request, res: Response) {
        const listaPdtService = new ListaPdtService()

        const product = await listaPdtService.execute()
        return res.json(product)

    }
}

export { ListarProdutosController }