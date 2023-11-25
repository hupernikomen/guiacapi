import { Request, Response } from 'express'
import { ListaLojasService } from '../../services/store/ListaLojasService'


class ListaLojasController {
    async handle(req: Request, res: Response) {
        const regionID = req.query.regionID as string
        const listaLojasService = new ListaLojasService()

        const _store = await listaLojasService.execute({ regionID })
        return res.json(_store)

    }
}

export { ListaLojasController }