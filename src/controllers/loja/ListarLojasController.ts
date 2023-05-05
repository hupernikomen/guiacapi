import { Request, Response } from 'express'
import { ListarLojasService } from '../../services/loja/ListarLojasService'


class ListarLojasController {
    async handle(req: Request, res: Response) {

        const listarLojasService = new ListarLojasService()

        const lojas = await listarLojasService.execute()
        return res.json(lojas)

    }
}

export { ListarLojasController }