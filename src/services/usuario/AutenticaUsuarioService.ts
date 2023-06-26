import prismaClient from '../../prisma';
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
interface AuthRequest {
    email: string,
    senha: string
}

class AutenticaService {
    async execute({
        email,
        senha
    }: AuthRequest) {

        if (!email) {
            throw new Error("não cadastrado");
        }

        const usuario = await prismaClient.usuario.findFirst({
            where: { email: email }
        })

        const comparePassword = await compare(senha, usuario.senha)
        if (!comparePassword) {
            throw new Error("informações incorretas");
        }


        const token = sign(
            { email: usuario.email },
            process.env.JWT_SECRET,
            { subject: usuario.id }
        )

        return {
            id: usuario.id,
            email: usuario.email,
            token: token
        }
    }
}

export { AutenticaService }