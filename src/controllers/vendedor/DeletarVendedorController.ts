import { Request, Response } from 'express'

import { DeletarVendedorService } from '../../services/vendedor/DeletarVendedorService'

class DeletarVendedorController {
  async handle(req: Request, res: Response) {
    const vendedorID = req.query.vendedorID as string

    const deletarVendedor = new DeletarVendedorService()

    await deletarVendedor.execute({
        vendedorID
    })

    return res.status(200).json({
      message: "Vendedor Excluido"
    })

  }
}

export { DeletarVendedorController }