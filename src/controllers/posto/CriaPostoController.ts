import { Request, Response } from "express";
import { CriaPostoService } from "../../services/posto/CriaPostoService";

class CriaPostoController {
  async handle(req: Request, res: Response) {
    const criaPostoService = new CriaPostoService();

    const { usuarioID } = req.body;
    const posto = await criaPostoService.execute({usuarioID})

    if(!posto) throw new Error("Erro ao cadastrar posto - API");

    return res.status(200).json({message: "Criado com sucesso"});
  }
}

export { CriaPostoController };
