import { Request, Response } from "express";
import { CriaProfService } from "../../services/profissional/CriaProfService";

class CriaProfController {
  async handle(req: Request, res: Response) {
    const criaProfService = new CriaProfService();

    const regiaoID = req.query.regiaoID as string
    const servicoID = req.query.servicoID as string

    const { nome, listaServicos, whatsapp, email, endereco} = req.body;


    if (!req.file ) {
      throw new Error("Ops.. algo deu errado!");
    } else {
      const file = req.file;

      const profissional = await criaProfService.execute({
        nome,
        avatar: file,
        listaServicos,
        whatsapp,
        email,
        endereco,
        regiaoID,
        servicoID
      })
      return res.status(200).json(profissional);
    }


  }
}

export { CriaProfController };
