import { Request, Response } from "express";
import { CriaContatoService } from "../../services/contato/CriaContatoService";

class CriaContatoController {
  async handle(req: Request, res: Response) {
    const criaContatoService = new CriaContatoService();

    const usuarioID = req.query.usuarioID as string

    const { nome, whatsapp,setor, horario } = req.body;

    if (!req.file) {
      throw new Error("Ops.. algo deu errado!");
    } else {
      const file = req.file;

      const contato = await criaContatoService.execute({
        nome,
        avatar: file,
        setor,
        whatsapp,
        horario,
        usuarioID
      })

      return res.status(200).json(contato);

    }



  }
}

export { CriaContatoController };
