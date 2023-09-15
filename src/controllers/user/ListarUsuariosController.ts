import { Request, Response } from 'express'
import { ListarUsuariosService } from '../../services/user/ListarUsuariosService'


class ListarUsuariosController {
    async handle(req: Request, res: Response) {
        const listarUsuariosService = new ListarUsuariosService()

        const _user = await listarUsuariosService.execute()
        return res.json(_user)

    }
}

export { ListarUsuariosController }