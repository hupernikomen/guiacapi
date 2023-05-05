import { Request, Response } from 'express'
import { CriarVendedorService } from '../../services/vendedor/CriarVendedorService';

class CriarVendedorController {
    async handle(req: Request, res: Response) {
        const { nome, whatsapp,lojaID } = req.body

        if (!req.file) {
            throw new Error("Ops.. algo deu errado!");
        } else {
            const file = req.file;

            const criarVendedorService = new CriarVendedorService();

            const vendedor = await criarVendedorService.execute({
                nome,
                whatsapp,
                foto: file,
                lojaID
            })

            return res.json(vendedor)
        }
    }
}

export { CriarVendedorController }