import { Request, Response } from "express";
import { CriaMarcaService } from "../../services/marca/CriaMarcaService";

class CriaMarcaController {
  async handle(req: Request, res: Response) {
    const criaMarcaService = new CriaMarcaService();

    const { nome } = req.body;

    if (!req.file) throw new Error("Ops.. algo deu errado!");
    
    const marca = await criaMarcaService.execute({
      nome,
      avatar: req.file,
    })

    return res.status(200).json(marca);

  }
}

export { CriaMarcaController };
