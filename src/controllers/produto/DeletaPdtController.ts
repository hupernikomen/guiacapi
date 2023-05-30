import { Request, Response } from 'express'

import { DeletaPdtService } from '../../services/produto/DeletaPdtService'

class DeletaPdtController {
  async handle(req: Request, res: Response) {
    const produtoID = req.query.produtoID as string

    const deletaPdtService = new DeletaPdtService()

    await deletaPdtService.execute({
      produtoID
    })

    return res.status(200).json({
      message: "Fique tranquilo! Já excluimos seu produto"
    })

  }
}

export { DeletaPdtController }