import { Request, Response } from "express";
import { CriaProfissionalService } from "../../services/person/CriaProfissionalService";

class CriaProfissionalController {
  async handle(req: Request, res: Response) {
    const criaProfissionalService = new CriaProfissionalService();

    const { userID, professionID } = req.body;

    const _person = await criaProfissionalService.execute({
      userID,
      professionID
    })

    return res.status(200).json(_person);




  }
}

export { CriaProfissionalController };
