import { Request, Response } from 'express';
import { ListCategoryFoodService } from '../../services/categoryFood/ListCategoryFoodController';

class ListCategoryFoodController {
  async handle(req: Request, res: Response) {
    const listCategoryFoodService = new ListCategoryFoodService();

    const _categoryFood = await listCategoryFoodService.execute();
    return res.json(_categoryFood);
  }
}

export { ListCategoryFoodController };
