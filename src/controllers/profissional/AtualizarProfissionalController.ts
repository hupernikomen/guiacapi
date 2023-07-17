import { Request, Response } from 'express'
import { AtualizarProfissionalService } from '../../services/profissional/AtualizarProfissionalService'

class AtualizarProfissionalController {
    async handle(req: Request, res: Response) {
        const usuarioID = req.query.usuarioID as string
        const {
            nome,
            bio,
            endereco,
            lista_servicos,
            album,
            bairro,
            profissaoID
        } = req.body

        const file = req.file
        const files = req.files

        const atualizarProfissionalService = new AtualizarProfissionalService();

        const profissional = await atualizarProfissionalService.execute({
            usuarioID,
            avatar: file,
            nome,
            bio,
            endereco,
            lista_servicos,
            album: files,
            bairro,
            profissaoID

        })


        return res.json(profissional)
    }
}

export { AtualizarProfissionalController }