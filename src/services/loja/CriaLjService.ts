import prismaClient from '../../prisma';
import { hash } from 'bcryptjs'

interface lojaRequest {
    email: string,
    senha: string,
    regiaoID: string,
}

class CriaLjService {
    async execute({
        email,
        senha,
        regiaoID
    }: lojaRequest) {

        if (!email) {
            throw new Error("Email Incorreto");
        }

        const emailExiste = await prismaClient.loja.findFirst({
            where: {
                email
            }
        })

        if (emailExiste) {
            throw new Error("Loja já cadastrada!");
        }

        const passwordCripto = await hash(senha, 8)

        const loja = await prismaClient.loja.create({
            data: {
                email,
                senha: passwordCripto,
                regiaoID
            }
            
        })

        return loja

    }
}

export { CriaLjService }