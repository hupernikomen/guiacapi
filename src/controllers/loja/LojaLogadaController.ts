import { Request, Response } from 'express'
import { LojaLogadaService } from '../../services/loja/LojaLogadaService'

class LojaLogadaController {

    async handle(req: Request, res: Response) {

        const usuarioID = req.query.usuarioID as string

        const lojaLogadaService = new LojaLogadaService();

        const logada = await lojaLogadaService.execute({
            usuarioID
        })

        return res.json(logada)
    }
}

export { LojaLogadaController }