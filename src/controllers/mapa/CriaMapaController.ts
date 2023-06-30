import { Request, Response } from 'express'
import { CriaMapaService } from '../../services/mapa/CriaMapaService'

class CriaMapaController {
  async handle(req: Request, res: Response) {
    const usuarioID = req.query.usuarioID as string
    const { latlng } = req.body

    const criaMapaService = new CriaMapaService();

    const mapa = await criaMapaService.execute({
      latlng,
      usuarioID
    })

    return res.json(mapa)
  }
}

export { CriaMapaController }