import { Request, Response } from 'express'
import { AtualizarProfissionalService } from '../../services/person/AtualizarProfissionalService'

class AtualizarProfissionalController {
    async handle(req: Request, res: Response) {
        const personID = req.query.personID as string
        const {
            name,
            bio,
            address,
            district,
            professionID
        } = req.body

        const atualizarProfissionalService = new AtualizarProfissionalService();

        const _person = await atualizarProfissionalService.execute({
            personID,
            avatar: req.file,
            name,
            bio,
            address,
            district,
            professionID

        })

        return res.json(_person)
    }
}

export { AtualizarProfissionalController }