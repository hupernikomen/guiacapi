import { Request, Response } from 'express'
import { AtualizaLojaService } from '../../services/loja/AtualizaLojaService'

class AtualizaLojaController {
    async handle(req: Request, res: Response) {
        const usuarioID = req.query.usuarioID as string
        const {
            nome,
            bio,
            endereco,
            bairro,
            ponto_ref,
            delivery,
            tema
        } = req.body

        const atualizaLojaService = new AtualizaLojaService();

        const data = await atualizaLojaService.execute({
            usuarioID,
            avatar: req.file,
            nome,
            bio,
            endereco,
            bairro,
            ponto_ref,
            delivery,
            tema

        })


        return res.json(data)
    }
}

export { AtualizaLojaController }