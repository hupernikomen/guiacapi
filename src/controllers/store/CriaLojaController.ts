import { Request, Response } from "express";
import { CriaLojaService } from "../../services/store/CriaLojaService";

class CriaLojaController {
  async handle(req: Request, res: Response) {
    const criaLojaService = new CriaLojaService();

    const { userID } = req.body;

    await criaLojaService.execute({ userID })
    return res.status(200).json({message:"Loja criada com sucesso"});

  }
}

export { CriaLojaController };
