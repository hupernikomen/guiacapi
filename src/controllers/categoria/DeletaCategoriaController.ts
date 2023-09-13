import { Request, Response } from 'express'

import { DeletaCategoriaService } from '../../services/categoria/DeletaCategoriaService'

class DeletaCategoriaController {
  async handle(req: Request, res: Response) {
    const categoriaID = req.query.categoriaID as string

    const deletaCategoriaService = new DeletaCategoriaService()
    await deletaCategoriaService.execute({ categoriaID })

    return res.status(200).json({ message: "Categoria Excluida" })

  }
}

export { DeletaCategoriaController }