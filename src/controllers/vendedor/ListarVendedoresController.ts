import { Request, Response } from 'express'
import { ListarVendedoresService } from '../../services/vendedor/ListarVendedoresService'


class ListarVendedoresController {
    async handle(req: Request, res: Response) {

        const lojaID = req.query.lojaID as string

        const listarVendedoresService = new ListarVendedoresService()

        const lojas = await listarVendedoresService.execute({
            lojaID
        })
        return res.json(lojas)

    }
}

export { ListarVendedoresController }