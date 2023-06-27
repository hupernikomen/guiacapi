import { Request, Response } from 'express'
import { CriaUsuarioService } from '../../services/usuario/CriaUsuarioService';

class CriaUsuarioController {
    async handle(req: Request, res: Response) {

        const regiaoID = req.query.regiaoID as string
        const { email, senha } = req.body

        const criaUsuarioService = new CriaUsuarioService();

        const loja = await criaUsuarioService.execute({
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

export { CriaUsuarioController }