import { Request, Response } from 'express';
import { CreateMenuService } from '../../services/menu/CreateMenuService';

class CreateMenuController {
  async handle(req: Request, res: Response) {
    const createMenuService = new CreateMenuService();

    const { name, price, details, foodID } = req.body;

    const _person = await createMenuService.execute({
      name,
      price,
      details,
      foodID
    });

    return res.status(200).json(_person);
  }
}

export { CreateMenuController };
