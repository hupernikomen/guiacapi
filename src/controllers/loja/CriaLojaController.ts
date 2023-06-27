import { Request, Response } from "express";
import { CriaLojaService } from "../../services/loja/CriaLojaService";

class CriaLojaController {
  async handle(req: Request, res: Response) {
    const criaLojaService = new CriaLojaService();

    const { usuarioID } = req.body;

    const loja = await criaLojaService.execute({
      usuarioID
    })

    return res.status(200).json(loja);




  }
}

export { CriaLojaController };
