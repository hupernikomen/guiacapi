import { Request, Response } from "express";
import { CriaMarcaService } from "../../services/marca/CriaMarcaService";

class CriaMarcaController {
  async handle(req: Request, res: Response) {
    const { nome } = req.body;
    if (!req.file) throw new Error("Falha ao carregar imagem da Marca - API");
    
    const criaMarcaService = new CriaMarcaService();
    const marca = await criaMarcaService.execute({
      nome,
      avatar: req.file,
    })

    return res.status(200).json(marca);

  }
}

export { CriaMarcaController };
