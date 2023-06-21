import { Request, Response } from "express";
import { CriaProfService } from "../../services/profissional/CriaProfService";

class CriaProfController {
  async handle(req: Request, res: Response) {
    const criaProfService = new CriaProfService();

    const regiaoID = req.query.regiaoID as string
    const servicoID = req.query.servicoID as string

    const { nome, listaServicos, whatsapp, email, aDomicilio, endereco, bio, statusGuia } = req.body;

    if (!req.file) {
      throw new Error("Ops.. algo deu errado!");
    } else {
      const file = req.file;
      const files = req.files;

      const profissional = await criaProfService.execute({
        nome,
        avatar: file,
        portfolio: files,
        listaServicos,
        whatsapp,
        email,
        aDomicilio,
        endereco,
        bio,
        statusGuia,
        regiaoID,
        servicoID
      })
      return res.status(200).json(profissional);
    }


  }
}

export { CriaProfController };
