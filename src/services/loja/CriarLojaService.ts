import prismaClient from '../../prisma';
import { hash } from 'bcryptjs'

interface lojaRequest {
    email: string,
    senha: string,
}

class CriarLojaService {
    async execute({
        email,
        senha,
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
            throw new Error("Usuario já cadastrado!");
        }

        const passwordCripto = await hash(senha, 8)

        const loja = await prismaClient.loja.create({
            data: {
                email,
                senha: passwordCripto,
                createdAt:new Date()
            }
            
        })

        return loja

    }
}

export { CriarLojaService }