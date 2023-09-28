import prismaClient from "../../prisma"
import { hash } from "bcryptjs";

interface usuarioRequest {
    userID: string,
    status: boolean,
    password: string
}

class AtualizaService {
    async execute({
        userID,
        status,
        password

    }: usuarioRequest) {

        const _user = await prismaClient.user.findUnique({ where: { id: userID } })
        if (!_user) throw new Error("Ops, infelizmente não encontramos!");
        
        let passwordCripto: string
        if (password) passwordCripto = await hash(password, 8)

        const __user = await prismaClient.user.update({
            where: { id: userID },
            data: {
                status,
                password: passwordCripto
            },
            select:{
                status:true,
                store:true,
                fuelStation:true,
                person:true,
                user:true,
            }
        })

        return __user

    }
}

export { AtualizaService }