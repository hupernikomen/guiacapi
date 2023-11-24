import { Request, Response } from 'express'
import { ListaLojasService } from '../../services/store/ListaLojasService'


class ListaLojasController {
    async handle(req: Request, res: Response) {

        const listaLojasService = new ListaLojasService()

        const _store = await listaLojasService.execute()
        return res.json(_store)

    }
}

export { ListaLojasController }