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
            cores,
            categoriaID,
            campanhaID
        } = req.body

        const atualizaProdutoService = new AtualizaProdutoService();
        await atualizaProdutoService.execute({
            nome,
            descricao,
            preco,
            oferta,
            tamanho,
            cores,
            categoriaID,
            campanhaID,
            produtoID
        })

        return res.status(200).json({message: "Produto atualizado"})
    }
}

export { AtualizaProdutoController }