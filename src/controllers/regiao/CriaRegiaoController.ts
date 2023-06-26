import { Request, Response } from 'express'
import { CriaRegiaoService } from '../../services/regiao/CriaRegiaoService'

class CriaRegiaoController {
    async handle(req: Request, res: Response) {
        const { nome } = req.body

        const criaRegiaoService = new CriaRegiaoService();

        const region = await criaRegiaoService.execute({
            nome
        })

        return res.json(region)
    }
}

export { CriaRegiaoController }