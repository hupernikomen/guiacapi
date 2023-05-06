
import prismaClient from '../../prisma';
import { hash } from 'bcryptjs'

interface lojaRequest {
    lojaID: string,
    novasenha: string,
}

class EsqueciSenhaService {
    async execute({
        lojaID,
        novasenha,
    }: lojaRequest) {

        if (!lojaID) {
            throw new Error("Loja não cadastrada");
        }

        const emailExiste = await prismaClient.loja.findFirst({
            where: {
                id:lojaID
            },
            
        })

        if (emailExiste) {
            const passwordCripto = await hash(novasenha, 4)
            
            const loja = await prismaClient.loja.update({
                where:{
                    id: lojaID
                },
                data: {
                    senha: passwordCripto,
                    createdAt:new Date()
                }
                
            })
    
            return loja
        }


        

    }
}

export { EsqueciSenhaService }