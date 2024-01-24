import { Request, Response } from 'express';
import { ListMenuService } from '../../services/menu/ListMenuService';
import { shuffle } from 'lodash';

class ListMenuController {
  async handle(req: Request, res: Response) {
    const listMenuService = new ListMenuService();

    const _menu = await listMenuService.execute();

    const shuffledResults = shuffle(_menu);
    return res.json(shuffledResults);
  }
}

export { ListMenuController };
