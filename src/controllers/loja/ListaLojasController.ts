import { Request, Response } from 'express'
import { ListaLojasService } from '../../services/loja/ListaLojasService'


class ListaLojasController {
    async handle(req: Request, res: Response) {

        const listaLojasService = new ListaLojasService()

        const lojas = await listaLojasService.execute()
        return res.json(lojas)

    }
}

export { ListaLojasController }