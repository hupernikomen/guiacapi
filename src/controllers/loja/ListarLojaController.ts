import { Request, Response } from 'express'
import { ListarLojaService } from '../../services/loja/ListarLojaService'


class ListarLojaController {
    async handle(req: Request, res: Response) {

        const lojaID = req.query.lojaID as string

        const listarLojaService = new ListarLojaService()

        const loja = await listarLojaService.execute({
            lojaID
        })
        return res.json(loja)

    }
}

export { ListarLojaController }