import { Request, Response } from 'express'
import { PorProfissaoService } from '../../services/profissional/PorProfissaoService'

class PorProfissaoController {
    async handle(req: Request, res: Response) {
        const servicoID = req.query.servicoID as string

        const porProfissaoService = new PorProfissaoService()

        const produto = await porProfissaoService.execute({
          servicoID
        })

        return res.json(produto)
    }
}

export { PorProfissaoController }