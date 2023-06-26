import { Request, Response } from "express";
import { AtualizaProfissaoService } from "../../services/profissao/AtualizaProfissaoService";

class AtualizaProfissaoController {
  async handle(req: Request, res: Response) {
    const atualizaProfissaoService = new AtualizaProfissaoService();

    const servicoID = req.query.servicoID as string 

    const {
        nome,
        avatar
     } =
      req.body;

      const servico = await atualizaProfissaoService.execute({
        nome,
        avatar,
        servicoID
      })

      return res.status(200).json(servico);


    }


  }

export { AtualizaProfissaoController };
