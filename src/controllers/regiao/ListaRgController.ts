import { Request, Response } from 'express'
import { ListaRgService } from '../../services/regiao/ListaRgService'


class ListaRgController {
    async handle(req: Request, res: Response) {
        const listaRgService = new ListaRgService()

        const regioes = await listaRgService.execute()
        return res.json(regioes)

    }
}

export { ListaRgController }