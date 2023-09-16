import { Request, Response } from 'express'
import { CriaAdminService } from '../../services/admin/CriaAdminService';

class CriaAdminController {
    async handle(req: Request, res: Response) {

        const { user, password } = req.body

        const criaAdminService = new CriaAdminService();

        const _user = await criaAdminService.execute({
            user,
            password
        })

        if(!_user) throw new Error("Ops, algo deu errado - API!");
        return res.status(200).json({message: "Cadastrado com Sucesso"})
    }
}

export { CriaAdminController }