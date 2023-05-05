import { Request, Response } from 'express'
import { AtualizarLojaService } from '../../services/loja/AtualizarLojaService'

class AtualizarLojaController {
    async handle(req: Request, res: Response) {
        const lojaID = req.query.lojaID as string
        const {
            ativo,
            nome,
            whatsapp,
            bio,
            endereco,
            bairro,
            referencia,
            latlng,
            entrega
        } = req.body

        const file = req.file

        const boo = entrega === 'true'

        const atualizarLojaService = new AtualizarLojaService();

        const data = await atualizarLojaService.execute({
            lojaID,
            ativo,
            logo: file,
            nome,
            whatsapp,
            bio,
            endereco,
            bairro,
            referencia,
            latlng,
            entrega: boo

        })


        return res.json(data)
    }
}

export { AtualizarLojaController }