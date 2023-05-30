import { Request, Response } from "express";
import { CriarServicoService } from "../../services/servico/CriarServicoService";

class CriarServicoController {
  async handle(req: Request, res: Response) {
    const criarServicoService = new CriarServicoService();

    const regiaoID = req.query.regiaoID as string
    const {nome } =req.body;

      const servico = await criarServicoService.execute({
        nome,
        regiaoID

      })

      return res.status(200).json(servico);




  }
}

export { CriarServicoController };
