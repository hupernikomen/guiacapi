import { Request, Response } from "express";
import { AtualizaPostoService } from "../../services/gasStation/AtualizarPostoService";

class AtualizaPostoController {
  async handle(req: Request, res: Response) {

    const gasStationID = req.query.gasStationID as string

    const { name, table, district } = req.body;
    if (!req.file) throw new Error("Erro ao enviar avatar - API");

    const atualizaPostoService = new AtualizaPostoService();
    const posto = await atualizaPostoService.execute({
      name,
      avatar: req.file,
      table,
      district,
      gasStationID
    })

    return res.status(200).json(posto);
  }
}

export { AtualizaPostoController };
