import { Request, Response } from 'express'
import { AtualizaService } from '../../services/user/AtualizaUsuarioService'

class AtualizaUsuarioController {
    async handle(req: Request, res: Response) {
        const userID = req.query.userID as string
        const { status, password } = req.body

        const atualizaService = new AtualizaService();

        const _user = await atualizaService.execute({
            userID,
            status,
            password
        })

        return res.json(_user)
    }
}

export { AtualizaUsuarioController }