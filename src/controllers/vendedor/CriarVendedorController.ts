import { Request, Response } from 'express'
import { CriarVendedorService } from '../../services/vendedor/CriarVendedorService';

class CriarVendedorController {
    async handle(req: Request, res: Response) {
        const { nome, whatsapp,setor } = req.body
        const lojaID = req.query.lojaID as string


        const criarVendedorService = new CriarVendedorService();

        const vendedor = await criarVendedorService.execute({
            nome,
            whatsapp,
            setor,
            lojaID
        })

        return res.json(vendedor)
    }
}

export { CriarVendedorController }