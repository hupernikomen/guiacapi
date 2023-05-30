import { Request, Response } from 'express'
import { ListaSrvService } from '../../services/servico/ListaSrvService'


class ListaSrvController {
    async handle(req: Request, res: Response) {
        const listaSrvService = new ListaSrvService()

        const servicos = await listaSrvService.execute()
        return res.json(servicos)

    }
}

export { ListaSrvController }