import { Request, Response } from 'express'
import { ListaVddService } from '../../services/vendedor/ListaVddService'


class ListaVddController {
    async handle(req: Request, res: Response) {

        const lojaID = req.loja_ID

        const listaVddService = new ListaVddService()

        const vendedores = await listaVddService.execute({
            lojaID
        })
        return res.json(vendedores)

    }
}

export { ListaVddController }