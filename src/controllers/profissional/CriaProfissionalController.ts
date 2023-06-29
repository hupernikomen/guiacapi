import { Request, Response } from "express";
import { CriaProfissionalService } from "../../services/profissional/CriaProfissionalService";

class CriaProfissionalController {
  async handle(req: Request, res: Response) {
    const criaProfissionalService = new CriaProfissionalService();

    const { usuarioID } = req.body;

    const profissional = await criaProfissionalService.execute({
      usuarioID
    })

    return res.status(200).json(profissional);




  }
}

export { CriaProfissionalController };
