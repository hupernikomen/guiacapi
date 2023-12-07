import prismaClient from '../../prisma';
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
interface AuthRequest {
    user: string,
    password: string
}

class AutenticaService {
    async execute({
        user,
        password
    }: AuthRequest) {

        const _admin = await prismaClient.admin.findFirst({ where: { user } })
        if (_admin) {

            const comparePassword = await compare(password, _admin.password)
            if (!comparePassword) throw new Error("password incorreta");

            const token = sign(
                { user: _admin.user },
                process.env.JWT_SECRET,
                { subject: _admin.id }
            )

            return {
                id: _admin.id,
                user: _admin.user,
                token: token,
                account: 'admin'
            }

        } else {

            const _user = await prismaClient.user.findUnique({ where: { user } })

            if (!_user) throw new Error("não cadastrado");

            const store = await prismaClient.store.findFirst({ where: { userID: _user.id } })
            const person = await prismaClient.person.findFirst({ where: { userID: _user.id } })
            const gasStation = await prismaClient.fuelStation.findFirst({ where: { userID: _user.id } })
            const payment = await prismaClient.payment.findMany({
                where: { userID: _user.id },
                orderBy: { expiration: 'desc' }
            })


            if (!_user) throw new Error("Usuário não cadastrado");

            const comparePassword = await compare(password, _user.password)

            if (!comparePassword) throw new Error("password incorreta");

            const token = sign(
                { user: _user.user },
                process.env.JWT_SECRET,
                { subject: _user.id }
            )

            const account = store || person || gasStation;
            

            return {
                id: _user.id,
                user: _user.user,
                token: token,
                account: account,
                payment
            }
        }

    }
}

export { AutenticaService }