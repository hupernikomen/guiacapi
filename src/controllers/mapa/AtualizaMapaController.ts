import { Request, Response } from "express";
import { AtualizaMapaService } from "../../services/mapa/AtualizarMapaService";

class AtualizaMapaController {
  async handle(req: Request, res: Response) {
    
    const usuarioID = req.query.usuarioID as string
    const { latlng } = req.body;
    
    const atualizaMapaService = new AtualizaMapaService();
    await atualizaMapaService.execute({
      latlng,
      usuarioID
    })

  return res.status(200).json({message: "Localização Atualizada"});
  }
}

export { AtualizaMapaController };
