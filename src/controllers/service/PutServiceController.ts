import { Request, Response } from 'express';
import { PutServiceService } from '../../services/service/PutServiceService';

class PutServiceController {
  async handle(req: Request, res: Response) {
    const serviceID = req.query.serviceID as string;
    const { name, bio, address, district, categoryServiceID } = req.body;

    const putServiceService = new PutServiceService();

    const _service = await putServiceService.execute({
      serviceID,
      avatar: req.file,
      name,
      bio,
      address,
      district,
      categoryServiceID
    });

    return res.json(_service);
  }
}

export { PutServiceController };
