import { Request, Response } from "express";
import { CriaPlanoService } from "../../services/plano/CriaPlanoService";

class CriaPlanoController {
  async handle(req: Request, res: Response) {
    const criaPlanoService = new CriaPlanoService();

    const {
      nome,
      valor,
      oferta,
      pacote 
    } = req.body;

    const plano = await criaPlanoService.execute({
      nome,
      valor,
      oferta,
      pacote
    })

    return res.status(200).json(plano);

  }
}

export { CriaPlanoController };
