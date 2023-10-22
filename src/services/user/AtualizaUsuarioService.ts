import prismaClient from "../../prisma"
import { hash } from "bcryptjs";

interface usuarioRequest {
    userID: string,
    password: string
}

class AtualizaService {
    async execute({
        userID,
        password

    }: usuarioRequest) {

        const _user = await prismaClient.user.findUnique({ where: { id: userID } })
        if (!_user) throw new Error("Ops, infelizmente não encontramos!");
        
        let passwordCripto: string
        if (password) passwordCripto = await hash(password, 8)

        const __user = await prismaClient.user.update({
            where: { id: userID },
            data: {
                password: passwordCripto
            },
            select:{
                store:true,
                fuelStation:true,
                person:true,
            }
        })

        return __user

    }
}

export { AtualizaService }