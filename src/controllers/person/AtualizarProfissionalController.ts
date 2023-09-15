import { Request, Response } from 'express'
import { AtualizarProfissionalService } from '../../services/person/AtualizarProfissionalService'

class AtualizarProfissionalController {
    async handle(req: Request, res: Response) {
        const personID = req.query.personID as string
        const {
            name,
            bio,
            address,
            services,
            district,
            professionID
        } = req.body

        if(!req.file) throw new Error("Falha ao enviar avatar - API");
        
        const atualizarProfissionalService = new AtualizarProfissionalService();

        const _person = await atualizarProfissionalService.execute({
            personID,
            avatar: req.file,
            name,
            bio,
            address,
            services,
            district,
            professionID

        })

        return res.json(_person)
    }
}

export { AtualizarProfissionalController }