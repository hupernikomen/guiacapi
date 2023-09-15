import { Request, Response } from "express";
import { CriaPlanoService } from "../../services/price/CriaPlanoService";

class CriaPlanoController {
  async handle(req: Request, res: Response) {
    const { name, price, off, advantage } = req.body;

    const criaPlanoService = new CriaPlanoService();
    const plano = await criaPlanoService.execute({
      name,
      price,
      off,
      advantage
    })

    return res.status(200).json({message: "Criado com sucesso"});

  }
}

export { CriaPlanoController };
