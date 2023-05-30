import prismaClient from "../../prisma";

interface servicoRequest {
    nome: string,
    regiaoID: string
}

class CriaSrvService {

    async execute({

        nome,
        regiaoID

    }: servicoRequest) {

        const servico = await prismaClient.servico.create({
            data: {
               
                nome,
                regiaoID
            }
        })

        return servico
    }
}

export { CriaSrvService }