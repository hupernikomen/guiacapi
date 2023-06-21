import { Request, Response } from 'express'
import { ListaProfService } from '../../services/profissional/ListaProfService'


class ListaProfController {
    async handle(req: Request, res: Response) {

        const listaProfService = new ListaProfService()

        const vendedores = await listaProfService.execute()
        return res.json(vendedores)

    }
}

export { ListaProfController }