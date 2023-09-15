import { Request, Response } from 'express'
import { ListarProfissionalService } from '../../services/person/ListarProfissionalService'


class ListarProfissionalController {
    async handle(req: Request, res: Response) {

        const listarProfissionalService = new ListarProfissionalService()

        const _person = await listarProfissionalService.execute()
        return res.json(_person)

    }
}

export { ListarProfissionalController }