import { Request, Response } from 'express'
import { ListaCampInatService } from '../../services/campanha/ListarCampInatService'


class ListaCampInatController {
    async handle(req: Request, res: Response) {
        const listaCampInatService = new ListaCampInatService()

        const campanhas = await listaCampInatService.execute()
        return res.json(campanhas)

    }
}

export { ListaCampInatController }