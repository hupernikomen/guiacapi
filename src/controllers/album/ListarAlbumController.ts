import { Request, Response } from 'express'
import { ListaAlbumService } from '../../services/album/ListarAlbumService'

class ListarAlbumController {
    async handle(req: Request, res: Response) {
        const listaAlbumService = new ListaAlbumService()

        const profissionalID = req.query.profissionalID as string

        const albuns = await listaAlbumService.execute({ profissionalID })
        return res.json(albuns)

    }
}

export { ListarAlbumController }