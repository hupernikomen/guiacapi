import prismaClient from "../../prisma";

interface servicoRequest {
    nome: string,
    icone:string
}

class CriaSrvService {

    async execute({

        nome,
        icone

    }: servicoRequest) {

        const servico = await prismaClient.servico.create({
            data: {
               
                nome,
                icone
            }
        })

        return servico
    }
}

export { CriaSrvService }