import { Request, Response } from 'express'
import { AtualizaProdutoService } from '../../services/produto/AtualizaProdutoService'

class AtualizaProdutoController {
    async handle(req: Request, res: Response) {
        const produtoID = req.query.produtoID as string

        const {
            nome,
            descricao,
            preco,
            oferta,
            tamanho,
            categoriaID,
            campanhaID
        } = req.body

        const atualizaProdutoService = new AtualizaProdutoService();

        const produto = await atualizaProdutoService.execute({
            nome,
            descricao,
            preco,
            oferta,
            tamanho,
            categoriaID,
            campanhaID,
            produtoID
        })



        return res.json(produto)
    }
}

export { AtualizaProdutoController }