import { Request, Response } from 'express';
import { CriaJobService } from '../../services/jobs/CreateJobService';

class CriaJobController {
  async handle(req: Request, res: Response) {
    const userID = req.query.userID as string;
    const { job, description, contact, validity, sendCurriculum } = req.body;

    const criaJobService = new CriaJobService();

    await criaJobService.execute({
      job,
      description,
      contact,
      validity,
      sendCurriculum,
      userID
    });

    return res.json({ message: 'Vaga criada com sucesso' });
  }
}

export { CriaJobController };
