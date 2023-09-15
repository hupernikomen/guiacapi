import { Request, Response } from 'express'
import { CriaMapaService } from '../../services/map/CriaMapaService'

class CriaMapaController {
  async handle(req: Request, res: Response) {
    const userID = req.query.userID as string
    const { latlng } = req.body

    const criaMapaService = new CriaMapaService();

    await criaMapaService.execute({
      latlng,
      userID
    })

    return res.json({ message: "Criado com sucesso" })
  }
}

export { CriaMapaController }