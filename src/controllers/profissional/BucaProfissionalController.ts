import { Request, Response } from 'express'
import { BuscaProfissionalService } from '../../services/profissional/BuscaProfissionalService'


class BuscaProfissionalController {
    async handle(req: Request, res: Response) {

        const profissionalID = req.query.profissionalID as string

        const buscaProfissionalService = new BuscaProfissionalService()

        const profissional = await buscaProfissionalService.execute({
            profissionalID
        })
        return res.json(profissional)

    }
}

export { BuscaProfissionalController }