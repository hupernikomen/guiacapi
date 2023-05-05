import { Request, Response } from 'express';
import { AuthLojaService } from '../../services/auth/AuthLojaService'

class AuthLojaController {
    async handle(req: Request, res: Response) {
        const { email, senha } = req.body

        const authLojaService = new AuthLojaService();
        const auth = await authLojaService.execute({
            email,
            senha
        })

        return res.json(auth)
    }
}

export { AuthLojaController }