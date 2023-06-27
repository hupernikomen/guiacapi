import { Request, Response } from 'express'
import { ListaContatosService } from '../../services/contato/ListaContatosService'


class ListaContatosController {
    async handle(req: Request, res: Response) {
        const listaContatosService = new ListaContatosService()

        const usuarioID = req.query.usuarioID as string

        const contatos = await listaContatosService.execute({
            usuarioID
        })
        return res.json(contatos)

    }
}

export { ListaContatosController }