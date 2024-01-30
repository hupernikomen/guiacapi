import { Request, Response } from 'express';
import { ListFoodService } from '../../services/food/ListFoodService';
import { shuffle } from 'lodash';

class ListFoodController {
  async handle(req: Request, res: Response) {
    const listFoodService = new ListFoodService();

    const _food = await listFoodService.execute();

    const shuffledResults = shuffle(_food);
    return res.json(shuffledResults);
  }
}

export { ListFoodController };
