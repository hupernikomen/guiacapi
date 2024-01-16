import { Request, Response } from 'express';
import { GetUniqueServiceService } from '../../services/service/GetUniqueServiceService';

class BuscaProfissionalController {
  async handle(req: Request, res: Response) {
    const serviceID = req.query.serviceID as string;

    const getUniqueServiceService = new GetUniqueServiceService();
    const _person = await getUniqueServiceService.execute({ serviceID });
    return res.json(_person);
  }
}

export { BuscaProfissionalController };
