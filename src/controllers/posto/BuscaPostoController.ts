import { Request, Response } from 'express'
import { BuscaPostoService } from '../../services/posto/BuscaPostoService'


class BuscaPostoController {
    async handle(req: Request, res: Response) {

        const usuarioID = req.query.usuarioID as string

        const buscaPostoService = new BuscaPostoService()

        const posto = await buscaPostoService.execute({
            usuarioID
        })
        return res.json(posto)

    }
}

export { BuscaPostoController }