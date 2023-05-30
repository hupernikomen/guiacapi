import { Request, Response } from "express";
import { AtualizarServicoService } from "../../services/servico/AtualizarServicoService";

class AtualizarServicoController {
  async handle(req: Request, res: Response) {
    const atualizarServicoService = new AtualizarServicoService();

    const servicoID = req.query.servicoID as string 

    const {
        nome
     } =
      req.body;

      const servico = await atualizarServicoService.execute({
        nome,
        servicoID
      })

      return res.status(200).json(servico);


    }


  }

export { AtualizarServicoController };
