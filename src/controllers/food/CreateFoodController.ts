import { Request, Response } from 'express';
import { CreateFoodService } from '../../services/food/CreateFoodService';

class CreateFoodController {
  async handle(req: Request, res: Response) {
    const createFoodService = new CreateFoodService();

    const { userID } = req.body;

    await createFoodService.execute({ userID });
    return res.status(200).json({ message: 'Food criada com sucesso' });
  }
}

export { CreateFoodController };
