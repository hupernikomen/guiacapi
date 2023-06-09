import { Request, Response } from "express";
import { AtualizaProfissaoService } from "../../services/profissao/AtualizaProfissaoService";

class AtualizaProfissaoController {
  async handle(req: Request, res: Response) {
    const atualizaProfissaoService = new AtualizaProfissaoService();

    const profissaoID = req.query.profissaoID as string 

    const {
        nome,
        avatar
     } =
      req.body;

      const profissao = await atualizaProfissaoService.execute({
        nome,
        avatar,
        profissaoID
      })

      return res.status(200).json(profissao);


    }


  }

export { AtualizaProfissaoController };
