import { Request, Response } from "express";
import { CriaPostoService } from "../../services/posto/CriaPostoService";

class CriaPostoController {
  async handle(req: Request, res: Response) {
    const criaPostoService = new CriaPostoService();

    const { usuarioID } = req.body;

    const posto = await criaPostoService.execute({
      usuarioID
    })

    return res.status(200).json(posto);




  }
}

export { CriaPostoController };
