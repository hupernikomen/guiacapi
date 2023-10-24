import { Request, Response } from 'express'
import { ListaLojasServiceAdmin } from '../../services/store/ListaLojasServiceAdmin'


class ListaLojasControllerAdmin {
    async handle(req: Request, res: Response) {

        const listaLojasServiceAdmin = new ListaLojasServiceAdmin()

        const _store = await listaLojasServiceAdmin.execute()

        const _response = {
            type: "store",
            data: _store
        }

        return res.json(_response)

    }
}

export { ListaLojasControllerAdmin }