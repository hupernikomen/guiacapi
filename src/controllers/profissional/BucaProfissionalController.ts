import { Request, Response } from 'express'
import { BuscaProfissionalService } from '../../services/profissional/BuscaProfissionalService'


class BuscaProfissionalController {
    async handle(req: Request, res: Response) {

        const usuarioID = req.query.usuarioID as string

        const buscaProfissionalService = new BuscaProfissionalService()

        const profissional = await buscaProfissionalService.execute({
            usuarioID
        })
        return res.json(profissional)

    }
}

export { BuscaProfissionalController }