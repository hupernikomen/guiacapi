import { Request, Response } from 'express';
import { GetMenuService } from '../../services/menu/GetMenuService';

class GetMenuController {
  async handle(req: Request, res: Response) {
    const menuID = req.query.menuID as string;

    const getMenuService = new GetMenuService();
    const menu = await getMenuService.execute({ menuID });

    return res.json(menu);
  }
}

export { GetMenuController };
