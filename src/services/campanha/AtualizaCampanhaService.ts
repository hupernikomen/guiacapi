import prismaClient from "../../prisma";

interface servicoRequest {
    nome: string,
    status: boolean,
    tema: string,
    campanhaID: string
}

class AtualizaCampanhaService {

    async execute({
        nome,
        status,
        tema,
        campanhaID
    }: servicoRequest) {

        const servico = await prismaClient.campanha.update({
            where:{
                id:campanhaID
            },
            data: {
                nome,
                status,
                tema,
            }
        })

        return servico
    }
}

export { AtualizaCampanhaService  }