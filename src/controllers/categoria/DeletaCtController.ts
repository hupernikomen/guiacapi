import { Request, Response } from 'express'

import { DeletaCtService } from '../../services/categoria/DeletaCtService'

class DeletaCtController {
  async handle(req: Request, res: Response) {
    const categoriaID = req.query.categoriaID as string

    const deletaCtService = new DeletaCtService()

    await deletaCtService.execute({
        categoriaID
    })

    return res.status(200).json({
      message: "Categoria Excluida"
    })

  }
}

export { DeletaCtController }