import { Request, Response } from 'express'
import { ListarServicosService } from '../../services/servico/ListarServicoService'


class ListarServicosController {
    async handle(req: Request, res: Response) {
        const listarServicosService = new ListarServicosService()

        const servicos = await listarServicosService.execute()
        return res.json(servicos)

    }
}

export { ListarServicosController }