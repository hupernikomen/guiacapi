import { Request, Response } from 'express'
import { BuscaUsuarioService } from '../../services/user/BuscaUsuarioService'


class BuscaUsuarioController {
    async handle(req: Request, res: Response) {

        const userID = req.query.userID as string

        const buscaUsuarioService = new BuscaUsuarioService()

        const _user = await buscaUsuarioService.execute({ userID })
        return res.json(_user)

    }
}

export { BuscaUsuarioController }