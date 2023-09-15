import { Request, Response } from 'express'
import { AtualizaProdutoService } from '../../services/product/AtualizaProdutoService'

class AtualizaProdutoController {
    async handle(req: Request, res: Response) {
        const productID = req.query.productID as string

        const {
            name,
            description,
            price,
            off,
            size,
            color,
            categoryID,
            campaignID
        } = req.body

        const atualizaProdutoService = new AtualizaProdutoService();
        await atualizaProdutoService.execute({
            name,
            description,
            price,
            off,
            size,
            color,
            categoryID,
            campaignID,
            productID
        })

        return res.status(200).json({message: "Produto atualizado"})
    }
}

export { AtualizaProdutoController }