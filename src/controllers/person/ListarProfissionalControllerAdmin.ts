import { Request, Response } from 'express'
import { ListarProfissionalServiceAdmin } from '../../services/person/ListarProfissionalServiceAdmin'


class ListarProfissionalControllerAdmin {
    async handle(req: Request, res: Response) {

        const listarProfissionalServiceAdmin = new ListarProfissionalServiceAdmin()

        const _person = await listarProfissionalServiceAdmin.execute()

        const _response = {
            type: "person",
            _person
           }

        return res.json(_response)

    }
}

export { ListarProfissionalControllerAdmin }