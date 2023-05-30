import { Request, Response } from 'express'

import { DeletaVddService } from '../../services/vendedor/DeletaVddService'

class DeletaVddController {
  async handle(req: Request, res: Response) {
    const vendedorID = req.query.vendedorID as string

    const deletaVddService = new DeletaVddService()

    await deletaVddService.execute({
        vendedorID
    })

    return res.status(200).json({
      message: "Vendedor Excluido"
    })

  }
}

export { DeletaVddController }