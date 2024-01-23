import { Request, Response } from 'express';
import { ListMenuService } from '../../services/menu/ListMenuService';

class ListMenuController {
  async handle(req: Request, res: Response) {
    const listMenuService = new ListMenuService();

    const _menu = await listMenuService.execute();

    return res.json(_menu);
  }
}

export { ListMenuController };
