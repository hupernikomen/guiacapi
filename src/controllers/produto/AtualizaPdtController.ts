import { Request, Response } from 'express'
import { AtualizaPdtService } from '../../services/produto/AtualizaPdtService'

class AtualizaPdtController {
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

        const atualizaPdtService = new AtualizaPdtService();

        const produto = await atualizaPdtService.execute({
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

export { AtualizaPdtController }