import { Request, Response } from 'express'
import { ListaLjService } from '../../services/loja/ListaLjService'


class ListaLjController {
    async handle(req: Request, res: Response) {

        const listaLjService = new ListaLjService()

        const lojas = await listaLjService.execute()
        return res.json(lojas)

    }
}

export { ListaLjController }