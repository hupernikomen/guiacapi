import { Request, Response } from 'express'
import { ListaCtService } from '../../services/categoria/ListaCtService'


class ListaCtController {
    async handle(req: Request, res: Response) {
        const listaCtService = new ListaCtService()

        const categorias = await listaCtService.execute()
        return res.json(categorias)

    }
}

export { ListaCtController }