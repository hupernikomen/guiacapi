import { Request, Response } from 'express'
import { AtualizaService } from '../../services/usuario/AtualizaUsuarioService'

class AtualizaUsuarioController {
    async handle(req: Request, res: Response) {
        const usuarioID = req.query.usuarioID as string
        const {
            status,
            senha
        } = req.body

        const atualizaService = new AtualizaService();

        const data = await atualizaService.execute({
            usuarioID,
            status,
            senha
        })


        return res.json(data)
    }
}

export { AtualizaUsuarioController }