import { Request, Response } from "express";
import { CriarOwnerService } from "../../services/owner/CriarOwnerService";

class CriaOwnerController {
  async handle(req: Request, res: Response) {
    const criarOwnerService = new CriarOwnerService();

    const { name, whatsapp } = req.body;

    const _owner = await criarOwnerService.execute({
      name,
      whatsapp,
    })

    return res.status(200).json(_owner);

  }
}

export { CriaOwnerController };
