import { Request, Response } from "express";
import { CriaContatoService } from "../../services/contato/CriaContatoService";

class CriaContatoController {
  async handle(req: Request, res: Response) {
    const criaContatoService = new CriaContatoService();

    const usuarioID = req.query.usuarioID as string

    const { nome, avatar, whatsapp, horario } = req.body;

    const contato = await criaContatoService.execute({
      nome,
      avatar,
      whatsapp,
      horario,
      usuarioID
    })

    return res.status(200).json(contato);




  }
}

export { CriaContatoController };
