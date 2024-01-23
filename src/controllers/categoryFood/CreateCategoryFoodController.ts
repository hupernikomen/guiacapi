import { Request, Response } from 'express';
import { CreateCategoryFoodService } from '../../services/categoryFood/CreateCategoryFoodService';

class CreateCategoryFoodController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;

    const createCategoryFoodService = new CreateCategoryFoodService();
    const _categoryFood = await createCategoryFoodService.execute({ name });

    if (!_categoryFood) throw new Error('Erro ao criar categoria - API');

    return res.status(200).json({ message: 'Criado com Sucesso' });
  }
}

export { CreateCategoryFoodController };
