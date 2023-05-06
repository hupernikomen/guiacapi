import { Request, Response } from 'express'
import { EsqueciSenhaService } from '../../services/loja/EsqueciSenhaService';

class EsqueciSenhaController {
    async handle(req: Request, res: Response) {
        const lojaID = req.query.lojaID as string
        const { novasenha } = req.body

        const criarLojaService = new EsqueciSenhaService();

        const loja = await criarLojaService.execute({
            lojaID,
            novasenha,
        })

        if (!loja) {
            throw new Error("Ops, algo deu errado!");

        }

        return res.status(200).json({
            novasenha
        })
    }
}

export { EsqueciSenhaController }