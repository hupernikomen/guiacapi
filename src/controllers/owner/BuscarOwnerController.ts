import { Request, Response } from 'express';
import { BuscaOwnerService } from '../../services/owner/BuscarOwnerService';

class BuscaOwnerController {
  async handle(req: Request, res: Response) {
    const userID = req.query.userID as string;

    const buscaOwnerService = new BuscaOwnerService();
    const owner = await buscaOwnerService.execute({ userID });

    return res.json(owner);
  }
}

export { BuscaOwnerController };
