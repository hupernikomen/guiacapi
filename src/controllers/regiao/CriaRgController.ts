import { Request, Response } from 'express'
import { CriaRgService } from '../../services/regiao/CriaRgService'

class CriaRgController {
    async handle(req: Request, res: Response) {
        const { nome } = req.body

        const criaRgService = new CriaRgService();

        const region = await criaRgService.execute({
            nome
        })

        return res.json(region)
    }
}

export { CriaRgController }