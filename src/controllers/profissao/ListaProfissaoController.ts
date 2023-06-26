import { Request, Response } from 'express'
import { ListaProfissaoService } from '../../services/profissao/ListaProfissaoService'


class ListaProfissaoController {
    async handle(req: Request, res: Response) {
        const listaProfissaoService = new ListaProfissaoService()

        const servicos = await listaProfissaoService.execute()
        return res.json(servicos)

    }
}

export { ListaProfissaoController }