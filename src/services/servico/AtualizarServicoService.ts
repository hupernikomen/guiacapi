import prismaClient from "../../prisma";

interface servicoRequest {
    nome: string,
    servicoID:string
}

class AtualizarServicoService {

    async execute({
        nome,
        servicoID
    }: servicoRequest) {

        const servico = await prismaClient.servico.update({
            where:{
                id:servicoID
            },
            data: {
                nome
            }
        })

        return servico
    }
}

export { AtualizarServicoService  }