import { Request, Response } from 'express'
import { ListaPostosService } from '../../services/posto/ListaPostosService'


class ListarPostosController {
    async handle(req: Request, res: Response) {

        const listarPostosService = new ListaPostosService()

        const postos = await listarPostosService.execute()
        return res.json(postos)

    }
}

export { ListarPostosController }