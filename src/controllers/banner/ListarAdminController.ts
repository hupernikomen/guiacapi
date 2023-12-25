import { Request, Response } from 'express';
import { ListarAdminService } from '../../services/banner/ListarAdminSevice';

class ListarAdminController {
  async handle(req: Request, res: Response) {
    const listarAdminService = new ListarAdminService();

    const banners = await listarAdminService.execute();

    return res.json(banners);
  }
}

export { ListarAdminController };
