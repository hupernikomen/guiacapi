import { Request, Response } from 'express';
import { AutenticaService } from '../../services/autentica/AutenticaService'

class AutenticaController {
    async handle(req: Request, res: Response) {
        const { email, senha } = req.body

        const autenticaService = new AutenticaService();
        const auth = await autenticaService.execute({
            email,
            senha
        })

        return res.json(auth)
    }
}

export { AutenticaController }