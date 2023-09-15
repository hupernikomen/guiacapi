import { Request, Response } from 'express'
import { ListarCampanhasInativasService } from '../../services/campaign/ListarCampanhasInativasService'


class ListaCampanhasInativasController {
    async handle(req: Request, res: Response) {
        const listarCampanhasInativasService = new ListarCampanhasInativasService()

        const _campaign = await listarCampanhasInativasService.execute()
        return res.json(_campaign)

    }
}

export { ListaCampanhasInativasController }