import { Request, Response } from "express";
import { CriaContatoService } from "../../services/contact/CriaContatoService";

class CriaContatoController {
  async handle(req: Request, res: Response) {
    const criaContatoService = new CriaContatoService();

    const userID = req.query.userID as string

    const { name, whatsapp, sector, time, saturday, sunday, away } = req.body;

    if (!req.file) throw new Error("Ops.. algo deu errado!");
    
    const _contact = await criaContatoService.execute({
      name,
      avatar: req.file,
      sector,
      whatsapp,
      time,
      saturday,
      sunday,
      away,
      userID
    })

    if(!_contact) throw new Error("Erro ao criar contato - API");

    return res.status(200).json({message: "Criado com Sucesso"})

  }
}

export { CriaContatoController };
