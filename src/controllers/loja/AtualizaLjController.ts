import { Request, Response } from 'express'
import { AtualizaLjService } from '../../services/loja/AtualizaLjService'

class AtualizaLjController {
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

        const atualizaLjService = new AtualizaLjService();

        const data = await atualizaLjService.execute({
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

export { AtualizaLjController }