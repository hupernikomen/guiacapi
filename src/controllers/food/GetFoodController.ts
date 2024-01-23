import { Request, Response } from 'express';
import { GetFoodService } from '../../services/food/GetFoodService';

class GetFoodController {
  async handle(req: Request, res: Response) {
    const userID = req.query.userID as string;
    const getFoodService = new GetFoodService();

    const _food = await getFoodService.execute({ userID });
    return res.json(_food);
  }
}

export { GetFoodController };
