import { Request, Response } from 'express'
import { BuscaUsuarioService } from '../../services/usuario/BuscaUsuarioService'


class BuscaUsuarioController {
    async handle(req: Request, res: Response) {

        const usuarioID = req.query.usuarioID as string

        const buscaUsuarioService = new BuscaUsuarioService()

        const usuario = await buscaUsuarioService.execute({
            usuarioID
        })
        return res.json(usuario)

    }
}

export { BuscaUsuarioController }