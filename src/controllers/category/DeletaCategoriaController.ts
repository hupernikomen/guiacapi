import { Request, Response } from 'express'

import { DeletaCategoriaService } from '../../services/category/DeletaCategoriaService'

class DeletaCategoriaController {
  async handle(req: Request, res: Response) {
    const categoryID = req.query.categoryID as string

    const deletaCategoriaService = new DeletaCategoriaService()
    await deletaCategoriaService.execute({ categoryID })

    return res.status(200).json({ message: "Categoria Excluida" })

  }
}

export { DeletaCategoriaController }