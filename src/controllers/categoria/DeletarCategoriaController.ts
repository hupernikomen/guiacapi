import { Request, Response } from 'express'

import { DeletarCategoriaService } from '../../services/categoria/DeletarCategoriaService'

class DeletarCategoriaController {
  async handle(req: Request, res: Response) {
    const categoriaID = req.query.categoriaID as string

    const deletarCategoria = new DeletarCategoriaService()

    await deletarCategoria.execute({
        categoriaID
    })

    return res.status(200).json({
      message: "Categoria Excluida"
    })

  }
}

export { DeletarCategoriaController }