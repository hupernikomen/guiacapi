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

        if (!req.file) throw new Error("Falha ao enviar banner")

        const atualizaLojaService = new AtualizaLojaService();
        await atualizaLojaService.execute({
            userID,
            avatar: req.file,
            name,
            bio,
            address,
            district,
            reference,
            delivery,
        })

        return res.status(200).json({message: "Loja Atualizada"})
    }
}

export { AtualizaLojaController }