import { Request, Response } from "express";
import { CriaMarcaService } from "../../services/brand/CriaMarcaService";

class CriaMarcaController {
  async handle(req: Request, res: Response) {

    const { name, userID } = req.body;
    if (!req.file) throw new Error("Falha ao carregar imagem da Marca - API");

    const criaMarcaService = new CriaMarcaService();

    const _brand = await criaMarcaService.execute({
      name,
      avatar: req.file,
      userID
    })

    return res.status(200).json(_brand);

  }
}

export { CriaMarcaController };
