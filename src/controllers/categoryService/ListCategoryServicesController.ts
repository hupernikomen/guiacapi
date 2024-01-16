import { Request, Response } from 'express';
import { ListCategoryServicesService } from '../../services/categoryService/ListCategoryServicesService';

class ListCategoryServicesController {
  async handle(req: Request, res: Response) {
    const listCategoryServicesService = new ListCategoryServicesService();

    const _categoryServices = await listCategoryServicesService.execute();
    return res.json(_categoryServices);
  }
}

export { ListCategoryServicesController };
