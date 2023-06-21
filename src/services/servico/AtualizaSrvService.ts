import prismaClient from "../../prisma";

interface servicoRequest {
    nome: string,
    icone: string,
    servicoID: string
}

class AtualizaSrvService {

    async execute({
        nome,
        icone,
        servicoID
    }: servicoRequest) {

        const servico = await prismaClient.servico.update({
            where: {
                id: servicoID
            },
            data: {
                nome,
                icone
            }
        })

        return servico
    }
}

export { AtualizaSrvService }