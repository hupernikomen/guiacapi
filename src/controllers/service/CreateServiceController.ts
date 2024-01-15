import { Request, Response } from 'express';
import { CreateServiceService } from '../../services/service/CreateServiceService';

class CreateServiceController {
  async handle(req: Request, res: Response) {
    const createServiceService = new CreateServiceService();

    const { userID, categoryServiceID } = req.body;

    const _service = await createServiceService.execute({
      userID,
      categoryServiceID
    });

    return res.status(200).json(_service);
  }
}

export { CreateServiceController };
