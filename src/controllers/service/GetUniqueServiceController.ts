import { Request, Response } from 'express';
import { GetUniqueServiceService } from '../../services/service/GetUniqueServiceService';

class GetUniqueServiceController {
  async handle(req: Request, res: Response) {
    const serviceID = req.query.serviceID as string;

    const getUniqueServiceService = new GetUniqueServiceService();
    const _service = await getUniqueServiceService.execute({ serviceID });
    return res.json(_service);
  }
}

export { GetUniqueServiceController };
