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
        } = req.body

        const atualizaPdtService = new AtualizaPdtService();

        let precoNumber = parseFloat(preco)
        let ofertaNumber = parseFloat(oferta)

        const produto = await atualizaPdtService.execute({
            nome,
            descricao,
            preco: precoNumber,
            oferta: ofertaNumber,
            tamanho,
            categoriaID,
            produtoID
        })



        return res.json(produto)
    }
}

export { AtualizaPdtController }