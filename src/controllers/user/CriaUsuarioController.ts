import { Request, Response } from 'express'
import { CriaUsuarioService } from '../../services/user/CriaUsuarioService';

class CriaUsuarioController {
    async handle(req: Request, res: Response) {

        const regionID = req.query.regionID as string
        const { user, password, company } = req.body

        const criaUsuarioService = new CriaUsuarioService();

        const _user = await criaUsuarioService.execute({
            user,
            password,
            regionID,
            company,
        })

        if(!_user) throw new Error("Ops, algo deu errado - API!");
        return res.json(_user)
    }
}

export { CriaUsuarioController }