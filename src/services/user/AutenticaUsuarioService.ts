import prismaClient from '../../prisma';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface AuthRequest {
  user: string;
  password: string;
}

class AutenticaService {
  async execute({ user, password }: AuthRequest) {
    const _admin = await prismaClient.admin.findFirst({ where: { user } });

    const comparePassword = await compare(password, _admin.password);

    if (!comparePassword) throw new Error('Senha Inválida');
    if (!user) throw new Error('Usuário não cadastrado');

    if (_admin) {
      const token = sign({ user: _admin.user }, process.env.JWT_SECRET, { subject: _admin.id });

      return {
        id: _admin.id,
        user: _admin.user,
        token: token,
        account: { type: 'admin' }
      };
    } else {
      const _user = await prismaClient.user.findUnique({ where: { user } });

      const store = await prismaClient.store.findFirst({ where: { userID: _user.id } });
      const person = await prismaClient.person.findFirst({ where: { userID: _user.id } });
      const service = await prismaClient.service.findFirst({ where: { userID: _user.id } });
      const gasStation = await prismaClient.fuelStation.findFirst({ where: { userID: _user.id } });
      const payment = await prismaClient.payment.findMany({
        where: { userID: _user.id },
        orderBy: { expiration: 'desc' }
      });

      const token = sign({ user: _user.user }, process.env.JWT_SECRET, { subject: _user.id });

      const account = store || person || service || gasStation;

      return {
        id: _user.id,
        user: _user.user,
        token: token,
        account: account,
        payment
      };
    }
  }
}

export { AutenticaService };
