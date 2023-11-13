import { Request, Response } from 'express'

import { DeletaRegiaoService } from '../../services/region/DeletaRegiaoService'

class DeletaRegiaoController {
  async handle(req: Request, res: Response) {
    const regionID = req.query.regionID as string

    const deletaRegiaoService = new DeletaRegiaoService()
    await deletaRegiaoService.execute({ regionID })

    return res.status(200).json({ message: "Regiao Excluida" })

  }
}

export { DeletaRegiaoController }