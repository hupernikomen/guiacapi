import { Request, Response } from 'express'

import { DeletaProdutoService } from '../../services/produto/DeletaProdutoService'

class DeletaProdutoController {
  async handle(req: Request, res: Response) {
    const produtoID = req.query.produtoID as string

    const deletaProdutoService = new DeletaProdutoService()
    await deletaProdutoService.execute({ produtoID })

    return res.status(200).json({ message: "Produto excluido" })

  }
}

export { DeletaProdutoController }