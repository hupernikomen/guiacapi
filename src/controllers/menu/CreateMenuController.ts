import { Request, Response } from 'express';
import { CreateMenuService } from '../../services/menu/CreateMenuService';

class CreateMenuController {
  async handle(req: Request, res: Response) {
    const createMenuService = new CreateMenuService();

    const foodID = req.query.foodID as string;
    const { name, price, details } = req.body;

    const _menu = await createMenuService.execute({
      image: req.file,
      name,
      price,
      details,
      foodID
    });

    return res.status(200).json(_menu);
  }
}

export { CreateMenuController };
