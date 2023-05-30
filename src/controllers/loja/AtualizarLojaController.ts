import { Request, Response } from 'express'
import { AtualizarLojaService } from '../../services/loja/AtualizarLojaService'

class AtualizarLojaController {
    async handle(req: Request, res: Response) {
        const lojaID = req.query.lojaID as string
        const {
            statusGuia,
            nome,
            bio,
            endereco,
            bairro,
            referencia,
            latlng,
            entrega
        } = req.body

        const file = req.file

        const atualizarLojaService = new AtualizarLojaService();

        const data = await atualizarLojaService.execute({
            lojaID,
            statusGuia,
            avatar: file,
            nome,
            bio,
            endereco,
            bairro,
            referencia,
            latlng,
            entrega

        })


        return res.json(data)
    }
}

export { AtualizarLojaController }