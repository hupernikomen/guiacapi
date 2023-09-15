import { Request, Response } from 'express'
import { CriaRegiaoService } from '../../services/region/CriaRegiaoService'

class CriaRegiaoController {
    async handle(req: Request, res: Response) {
        const { name } = req.body

        const criaRegiaoService = new CriaRegiaoService();

        const _region = await criaRegiaoService.execute({
            name
        })

        return res.json(_region)
    }
}

export { CriaRegiaoController }