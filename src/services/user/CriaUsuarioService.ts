import prismaClient from '../../prisma';
import { hash } from 'bcryptjs'

interface usuarioRequest {
    user: string,
    password: string,
    regionID: string,
}

class CriaUsuarioService {
    async execute({
        user,
        password,
        regionID,
    }: usuarioRequest) {

        if (!user) throw new Error("informe seu email");

        const _user = await prismaClient.user.findFirst({ where: { user } })
        if (_user) throw new Error("Usuário já cadastrado!");


        const passwordCripto = await hash(password, 8)

        const __user = await prismaClient.user.create({
            data: {
                user,
                password: passwordCripto,
                regionID,
            },
            select: { id: true }

        })

        return __user

    }
}

export { CriaUsuarioService }