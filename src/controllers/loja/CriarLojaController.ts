import { Request, Response } from 'express'
import { CriarLojaService } from '../../services/loja/CriarLojaService'

class CriarLojaController {
    async handle(req: Request, res: Response) {

        const regiaoID = req.query.regiaoID as string
        const { email, senha } = req.body

        const criarLojaService = new CriarLojaService();

        const loja = await criarLojaService.execute({
            email,
            senha,
            regiaoID
        })

        if(!loja) {
            throw new Error("Ops, algo deu errado!");
            
        }

        return res.status(200).json({
            message: "Cadastrado com Sucesso"
        })
    }
}

export { CriarLojaController }