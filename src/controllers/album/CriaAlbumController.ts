import { Request, Response } from "express";
import { CriaAlbumService } from "../../services/album/CriaAlbumService";

class CriaAlbumController {
  async handle(req: Request, res: Response) {
    const criaAlbumService = new CriaAlbumService();

    const profissionalID = req.query.profissionalID as string

    if (!req.files) {
      throw new Error("Ops.. algo deu errado!");
    }
    
    const album = await criaAlbumService.execute({
      imagem: req.files,
      profissionalID
    })

    return res.status(200).json(album);

  }
}

export { CriaAlbumController };
