import { Request, Response } from 'express';
import { CreateAdminsService } from '../../services/admin/CreateAdminsService';

class CreateAdminsController {
  async handle(req: Request, res: Response) {
    const { user, password } = req.body;

    const createAdminsService = new CreateAdminsService();

    const _user = await createAdminsService.execute({
      user,
      password
    });

    if (!_user) throw new Error('Ops, algo deu errado - API!');
    return res.status(200).json({ message: 'Cadastrado com Sucesso' });
  }
}

export { CreateAdminsController };
