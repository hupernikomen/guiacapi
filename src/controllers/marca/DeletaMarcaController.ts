import { Request, Response } from 'express'

import { DeletaMarcaService } from '../../services/marca/DeletaMarcaService'

class DeletaMarcaController {
  async handle(req: Request, res: Response) {
    const marcaID = req.query.marcaID as string

    const deletaMarcaService = new DeletaMarcaService()

    await deletaMarcaService.execute({
      marcaID
    })

    return res.status(200).json({
      message:  "Marca Excluida"
    })

  }
}

export { DeletaMarcaController }