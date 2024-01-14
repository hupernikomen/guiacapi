import prismaClient from '../../prisma';
import { hash } from 'bcryptjs';

interface adminsRequest {
  user: string;
  password: string;
}

class CreateAdminsService {
  async execute({ user, password }: adminsRequest) {
    if (!user) throw new Error('informe seu user');

    const _user = await prismaClient.admin.findFirst({ where: { user } });
    if (_user) throw new Error('Usuário já cadastrado!');

    const passwordCripto = await hash(password, 8);

    const __user = await prismaClient.admin.create({
      data: {
        user,
        password: passwordCripto
      },
      select: { id: true }
    });

    return __user;
  }
}

export { CreateAdminsService };
