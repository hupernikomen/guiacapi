import { Request, Response } from 'express'
import { ListarCampanhasInativasService } from '../../services/campanha/ListarCampanhasInativasService'


class ListaCampanhasInativasController {
    async handle(req: Request, res: Response) {
        const listarCampanhasInativasService = new ListarCampanhasInativasService()

        const campanhas = await listarCampanhasInativasService.execute()
        return res.json(campanhas)

    }
}

export { ListaCampanhasInativasController }