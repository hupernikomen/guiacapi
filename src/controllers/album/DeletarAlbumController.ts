import { Request, Response } from 'express'

import { DeletaAlbumService } from '../../services/album/DeletaAlbumService'

class DeletarAlbumController {
  async handle(req: Request, res: Response) {
    const albumID = req.query.albumID as string

    const deletaAlbumService = new DeletaAlbumService()

    await deletaAlbumService.execute({ albumID })

    return res.status(200).json({
      message: "Album Excluido"
    })

  }
}

export { DeletarAlbumController }