import prismaClient from "../../prisma";

interface servicoRequest {
    nome: string,
    avatar: string,
    servicoID: string
}

class AtualizaProfissaoService {

    async execute({
        nome,
        avatar,
        servicoID
    }: servicoRequest) {

        const servico = await prismaClient.profissao.update({
            where: {
                id: servicoID
            },
            data: {
                nome,
                avatar
            }
        })

        return servico
    }
}

export { AtualizaProfissaoService }