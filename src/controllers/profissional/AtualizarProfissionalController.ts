import { Request, Response } from 'express'
import { AtualizarProfissionalService } from '../../services/profissional/AtualizarProfissionalService'

class AtualizarProfissionalController {
    async handle(req: Request, res: Response) {
        const profissionalID = req.query.profissionalID as string
        const {
            nome,
            bio,
            endereco,
            lista_servicos,
            bairro,
            profissaoID
        } = req.body

        if(!req.file) throw new Error("Falha ao enviar avatar - API");
        
        const atualizarProfissionalService = new AtualizarProfissionalService();

        const profissional = await atualizarProfissionalService.execute({
            profissionalID,
            avatar: req.file,
            nome,
            bio,
            endereco,
            lista_servicos,
            bairro,
            profissaoID

        })

        return res.json(profissional)
    }
}

export { AtualizarProfissionalController }