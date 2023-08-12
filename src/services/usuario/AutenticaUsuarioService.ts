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

        const usuario = await prismaClient.usuario.findUnique({
            where: { email }
        })

        const loja = await prismaClient.loja.findFirst({
            where: { usuarioID: usuario.id }
        })
        const profissional = await prismaClient.profissional.findFirst({
            where: { usuarioID: usuario.id }
        })
        const posto = await prismaClient.posto.findFirst({
            where: { usuarioID: usuario.id }
        })

        console.log(usuario,"USUARIOOOOOO");
        


        if (!usuario) {
            throw new Error("Usuário não cadastrado");
        }


        if (!usuario.status) {
            throw new Error("Conta Bloqueada");
        }

        const comparePassword = await compare(senha, usuario.senha)
        if (!comparePassword) {
            throw new Error("senha incorreta");
        }


        const token = sign(
            { email: usuario.email },
            process.env.JWT_SECRET,
            { subject: usuario.id }
        )

        return {
            id: usuario.id,
            email: usuario.email,
            token: token,
            conta: { loja, profissional, posto },

        }
    }
}

export { AutenticaService }