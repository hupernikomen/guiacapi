import { Request, Response } from 'express';
import { ListaContatosService } from '../../services/contact/ListaContatosService';

class ListaContatosController {
  async handle(req: Request, res: Response) {
    const listaContatosService = new ListaContatosService();

    const userID = req.query.userID as string;

    const _contact = await listaContatosService.execute({ userID });

    return res.json(_contact);
  }
}

export { ListaContatosController };
