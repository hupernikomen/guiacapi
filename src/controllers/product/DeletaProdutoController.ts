import { Request, Response } from 'express'

import { DeletaProdutoService } from '../../services/product/DeletaProdutoService'

class DeletaProdutoController {
  async handle(req: Request, res: Response) {
    const productID = req.query.productID as string

    const deletaProdutoService = new DeletaProdutoService()
    await deletaProdutoService.execute({ productID })

    return res.status(200).json({ message: "Produto excluido" })

  }
}

export { DeletaProdutoController }