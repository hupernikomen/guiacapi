import { Request, Response } from 'express';
import { ListServicesService } from '../../services/service/ListServicesService';
import { shuffle } from 'lodash';

class ListServicesController {
  async handle(req: Request, res: Response) {
    const regionID = req.query.regionID as string;

    const listServicesService = new ListServicesService();

    const _service = await listServicesService.execute({ regionID });

    const shuffledResults = shuffle(_service);
    return res.json(shuffledResults);
  }
}

export { ListServicesController };
