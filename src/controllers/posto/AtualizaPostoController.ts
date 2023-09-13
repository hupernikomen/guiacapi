import { Request, Response } from "express";
import { AtualizaPostoService } from "../../services/posto/AtualizarPostoService";

class AtualizaPostoController {
  async handle(req: Request, res: Response) {

    const postoID = req.query.postoID as string

    const { nome, tabela, bairro } = req.body;
    if (!req.file) throw new Error("Erro ao enviar avatar - API");

    const atualizaPostoService = new AtualizaPostoService();
    const posto = await atualizaPostoService.execute({
      nome,
      avatar: req.file,
      tabela,
      bairro,
      postoID
    })

    return res.status(200).json(posto);
  }
}

export { AtualizaPostoController };
