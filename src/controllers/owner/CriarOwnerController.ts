import { Request, Response } from "express";
import { CriarOwnerService } from "../../services/owner/CriarOwnerService";

class CriaOwnerController {
  async handle(req: Request, res: Response) {
    
    const userID = req.query.userID as string
    const { name, whatsapp } = req.body;
    
    const criarOwnerService = new CriarOwnerService();
    const _owner = await criarOwnerService.execute({
      userID,
      name,
      whatsapp,
    })

    return res.status(200).json(_owner);

  }
}

export { CriaOwnerController };
