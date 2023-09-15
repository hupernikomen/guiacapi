import { Request, Response } from 'express'
import { ListaProfissaoService } from '../../services/profession/ListaProfissaoService'

class ListaProfissaoController {
    async handle(req: Request, res: Response) {
        const listaProfissaoService = new ListaProfissaoService()

        const _profession = await listaProfissaoService.execute()
        return res.json(_profession)

    }
}

export { ListaProfissaoController }