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

        const loja = await prismaClient.loja.findFirst({
            where: { email: email }
        })

        if (!loja) {
            throw new Error("Email não cadastrado");
        }

        const comparePassword = await compare(senha, loja.senha)
        if (!comparePassword) {
            throw new Error("Email ou senha incorreta");
        }


        const token = sign(
            { email: loja.email },
            process.env.JWT_SECRET,
            { subject: loja.id }
        )

        return {
            id: loja.id,
            email: loja.email,
            token: token
        }
    }
}

export { AutenticaService }