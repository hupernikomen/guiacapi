import { Request, Response } from 'express';
import { ListarRegioesServiceAdmin } from '../../services/region/ListarRegioesServiceAdmin';

class ListarRegioesControllerAdmin {
  async handle(req: Request, res: Response) {
    const listarRegioesServiceAdmin = new ListarRegioesServiceAdmin();

    const regioes = await listarRegioesServiceAdmin.execute();
    return res.json(regioes);
  }
}

export { ListarRegioesControllerAdmin };
