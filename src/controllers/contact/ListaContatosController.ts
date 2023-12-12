import { Request, Response } from 'express';
import { ListaContatosService } from '../../services/contact/ListaContatosService';
import { shuffle } from 'lodash';

class ListaContatosController {
  async handle(req: Request, res: Response) {
    const listaContatosService = new ListaContatosService();

    const userID = req.query.userID as string;

    const _contact = await listaContatosService.execute({ userID });

    const shuffledResults = shuffle(_contact);
    return res.json(shuffledResults);
  }
}

export { ListaContatosController };
