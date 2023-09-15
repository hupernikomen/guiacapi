import { Request, Response } from "express";
import { CriaPostoService } from "../../services/gasStation/CriaPostoService";

class CriaPostoController {
  async handle(req: Request, res: Response) {
    const criaPostoService = new CriaPostoService();

    const { userID } = req.body;
    const _gasStation = await criaPostoService.execute({userID})
    if(!_gasStation) throw new Error("Erro ao cadastrar posto - API");
    
    return res.status(200).json({message: "Criado com sucesso"});
  }
}

export { CriaPostoController };
