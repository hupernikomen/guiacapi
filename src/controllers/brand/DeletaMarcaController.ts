import { Request, Response } from 'express'

import { DeletaMarcaService } from '../../services/brand/DeletaMarcaService'

class DeletaMarcaController {
  async handle(req: Request, res: Response) {
    const brandID = req.query.brandID as string

    const deletaMarcaService = new DeletaMarcaService()
    await deletaMarcaService.execute({ brandID })

    return res.status(200).json({ message: "Marca Excluida" })

  }
}

export { DeletaMarcaController }