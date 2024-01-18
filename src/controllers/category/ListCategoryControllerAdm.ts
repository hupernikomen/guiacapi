import { Request, Response } from 'express';
import { ListCategoryServiceAdm } from '../../services/category/ListCategoryServiceAdm';

class ListCategoryControllerAdm {
  async handle(req: Request, res: Response) {
    const listCategoryServiceAdm = new ListCategoryServiceAdm();

    const _categories = await listCategoryServiceAdm.execute();
    return res.json(_categories);
  }
}

export { ListCategoryControllerAdm };
