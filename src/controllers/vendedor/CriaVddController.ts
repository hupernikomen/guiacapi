import { Request, Response } from 'express'
import { CriaVddService } from '../../services/vendedor/CriaVddService';

class CriaVddController {
    async handle(req: Request, res: Response) {
        const { nome, whatsapp, setor } = req.body
        const lojaID = req.query.lojaID as string


        const criaVddService = new CriaVddService();

        if (!req.file) {
            throw new Error("Ops.. algo deu errado!");
        } else {
            const file = req.file;



            const vendedor = await criaVddService.execute({
                avatar: file,
                nome,
                whatsapp,
                setor,
                lojaID
            })

            return res.json(vendedor)
        }
    }
}

export { CriaVddController }