import { Request, Response } from "express";
import { CriaSrvService } from "../../services/servico/CriaSrvService";

class CriaSrvController {
  async handle(req: Request, res: Response) {
    const criaSrvService = new CriaSrvService();

    const regiaoID = req.query.regiaoID as string
    const {nome } =req.body;

      const servico = await criaSrvService.execute({
        nome,
        regiaoID

      })

      return res.status(200).json(servico);




  }
}

export { CriaSrvController };
