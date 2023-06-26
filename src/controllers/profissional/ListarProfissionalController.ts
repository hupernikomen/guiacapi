import { Request, Response } from 'express'
import { ListarProfissionalService } from '../../services/profissional/ListarProfissionalService'


class ListarProfissionalController {
    async handle(req: Request, res: Response) {

        const listarProfissionalService = new ListarProfissionalService()

        const profissional = await listarProfissionalService.execute()
        return res.json(profissional)

    }
}

export { ListarProfissionalController }