import { Request, Response } from 'express'
import { CriaLjService } from '../../services/loja/CriaLjService'

class CriaLjController {
    async handle(req: Request, res: Response) {

        const regiaoID = req.query.regiaoID as string
        const { email, senha } = req.body

        const criaLjService = new CriaLjService();

        const loja = await criaLjService.execute({
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

export { CriaLjController }