import { Request, Response } from 'express';
import { ListaMapasService } from '../../services/map/ListarMapsService';

class ListaMapasController {
  async handle(req: Request, res: Response) {
    const listaMapasService = new ListaMapasService();

    const _mapas = await listaMapasService.execute();

    return res.json(_mapas);
  }
}

export { ListaMapasController };
