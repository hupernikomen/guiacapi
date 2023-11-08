import { Request, Response } from 'express'
import { ListarProfissionalService } from '../../services/person/ListarProfissionalService'
import { shuffle } from 'lodash';

class ListarProfissionalController {
    async handle(req: Request, res: Response) {

        const regionID = req.query.regionID as string

        const listarProfissionalService = new ListarProfissionalService()

        const _person = await listarProfissionalService.execute({ regionID })

        const shuffledResults = shuffle(_person);
        return res.json(shuffledResults)

    }
}

export { ListarProfissionalController }