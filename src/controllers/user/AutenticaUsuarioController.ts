import { Request, Response } from 'express';
import { AutenticaService } from '../../services/user/AutenticaUsuarioService'

class AutenticaUsuarioController {
    async handle(req: Request, res: Response) {
        const { user, password } = req.body

        const autenticaService = new AutenticaService();
        const auth = await autenticaService.execute({
            user,
            password
        })

        return res.json(auth)
    }
}

export { AutenticaUsuarioController }