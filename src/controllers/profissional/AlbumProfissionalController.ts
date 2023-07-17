import { Request, Response } from 'express'
import { AlbumProfissionalService } from '../../services/profissional/AlbumProfissionalService'

class AlbumProfissionalController {
    async handle(req: Request, res: Response) {
        const usuarioID = req.query.usuarioID as string

        const files = req.files

        const albumProfissionalService = new AlbumProfissionalService();

        const profissional = await albumProfissionalService.execute({
            usuarioID,
            album: files,

        })


        return res.json(profissional)
    }
}

export { AlbumProfissionalController }