import { Request, Response } from 'express'

import { DeletarSubCategoriaService } from '../../services/subcategoria/DeteletarSubCategoriaService'

class DeletarSubCategoriaController {
  async handle(req: Request, res: Response) {
    const subcategoriaID = req.query.subcategoriaID as string

    const deletarProduto = new DeletarSubCategoriaService()

    await deletarProduto.execute({
        subcategoriaID
    })

    return res.status(200).json({
      message: "Fique tranquilo! Já excluimos "
    })

  }
}

export { DeletarSubCategoriaController }