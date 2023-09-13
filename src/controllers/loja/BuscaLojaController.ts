import { Request, Response } from 'express'
import { BuscaLojaService } from '../../services/loja/BuscaLojaService'

class BuscaLojaController {
    async handle(req: Request, res: Response) {

        const usuarioID = req.query.usuarioID as string
        const buscaLojaService = new BuscaLojaService()

        const loja = await buscaLojaService.execute({ usuarioID })
        return res.json(loja)

    }
}

export { BuscaLojaController }