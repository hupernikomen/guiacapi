import { Request, Response } from 'express';
import { CreateCategoryServiceService } from '../../services/categoryService/CreateCategoryServiceService';

class CreateCategoryServiceController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;

    const createCategoryServiceService = new CreateCategoryServiceService();
    const _categoryService = await createCategoryServiceService.execute({ name });

    if (!_categoryService) throw new Error('Erro ao criar categoria - API');

    return res.status(200).json({ message: 'Criado com Sucesso' });
  }
}

export { CreateCategoryServiceController };
