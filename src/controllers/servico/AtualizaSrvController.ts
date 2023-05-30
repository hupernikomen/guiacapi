import { Request, Response } from "express";
import { AtualizaSrvService } from "../../services/servico/AtualizaSrvService";

class AtualizaSrvController {
  async handle(req: Request, res: Response) {
    const atualizaSrvService = new AtualizaSrvService();

    const servicoID = req.query.servicoID as string 

    const {
        nome
     } =
      req.body;

      const servico = await atualizaSrvService.execute({
        nome,
        servicoID
      })

      return res.status(200).json(servico);


    }


  }

export { AtualizaSrvController };
