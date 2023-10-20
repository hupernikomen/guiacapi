import { Request, Response } from 'express'
import { ListaLojasServiceAdmin } from '../../services/store/ListaLojasServiceAdmin'


class ListaLojasControllerAdmin {
    async handle(req: Request, res: Response) {

        const listaLojasServiceAdmin = new ListaLojasServiceAdmin()

        const _store = await listaLojasServiceAdmin.execute()
        return res.json(_store)

    }
}

export { ListaLojasControllerAdmin }