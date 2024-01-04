import { Request, Response } from 'express';
import { ListarJobsService } from '../../services/jobs/ListarJobsService';

class ListarJobsController {
  async handle(req: Request, res: Response) {
    const listarJobsService = new ListarJobsService();

    const _jobs = await listarJobsService.execute();

    return res.json(_jobs);
  }
}

export { ListarJobsController };
