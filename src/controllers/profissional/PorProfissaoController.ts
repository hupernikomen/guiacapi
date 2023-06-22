import { Request, Response } from 'express'
import { PorProfissaoService } from '../../services/profissional/PorProfissaoService'

class PorProfissaoController {
    async handle(req: Request, res: Response) {
        const profissaoID = req.query.profissaoID as string

        const porProfissaoService = new PorProfissaoService()

        const produto = await porProfissaoService.execute({
            profissaoID
        })

        return res.json(produto)
    }
}

export { PorProfissaoController }