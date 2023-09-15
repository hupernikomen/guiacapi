import { Request, Response } from "express";
import { AtualizaMapaService } from "../../services/map/AtualizarMapaService";

class AtualizaMapaController {
  async handle(req: Request, res: Response) {
    
    const userID = req.query.userID as string
    const { latlng } = req.body;
    
    const atualizaMapaService = new AtualizaMapaService();
    await atualizaMapaService.execute({
      latlng,
      userID
    })

  return res.status(200).json({message: "Localização Atualizada"});
  }
}

export { AtualizaMapaController };
