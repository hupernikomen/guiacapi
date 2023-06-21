import prismaClient from "../../prisma";

interface servicoRequest {
    nome: string,
}

class CriaSrvService {

    async execute({

        nome,

    }: servicoRequest) {

        const servico = await prismaClient.servico.create({
            data: {
               
                nome,
            }
        })

        return servico
    }
}

export { CriaSrvService }