import { Request, Response } from "express";
import { CriaProfissaoService } from "../../services/profissao/CriaProfissaoService";

class CriaProfissaoController {
  async handle(req: Request, res: Response) {
    const criaProfissaoService = new CriaProfissaoService();

    const { nome, avatar } = req.body;

    const servico = await criaProfissaoService.execute({
      nome,
      avatar
    })

    return res.status(200).json(servico);




  }
}

export { CriaProfissaoController };
