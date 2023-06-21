import { Request, Response } from "express";
import { CriaProfService } from "../../services/profissional/CriaProfService";

class CriaProfController {
  async handle(req: Request, res: Response) {
    const criaProfService = new CriaProfService();

    const { nome, listaServicos, whatsapp, email, aDomicilio, endereco, bio, statusGuia, regiaoID, servicoID } = req.body;

    if (!req.file || !req.files) {
      throw new Error("Ops.. algo deu errado!");
    } else {
      const avatar = req.file;
      const portfolio = req.files;

      const servico = await criaProfService.execute({
        nome,
        avatar,
        portfolio,
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
      return res.status(200).json(servico);
    }


  }
}

export { CriaProfController };