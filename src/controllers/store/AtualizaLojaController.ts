import { Request, Response } from 'express'
import { AtualizaLojaService } from '../../services/store/AtualizaLojaService'

class AtualizaLojaController {
    async handle(req: Request, res: Response) {
        const userID = req.query.userID as string
        const {
            name,
            bio,
            address,
            district,
            reference,
            delivery,
        } = req.body


        const atualizaLojaService = new AtualizaLojaService();
        await atualizaLojaService.execute({
            userID,
            avatar: req.file,
            name,
            bio,
            address,
            district,
            reference,
            delivery: Boolean(delivery),
        })

        return res.status(200).json({message: "Loja Atualizada"})
    }
}

export { AtualizaLojaController }