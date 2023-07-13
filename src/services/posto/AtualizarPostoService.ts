import prismaClient from "../../prisma";

interface postoRequest {
    nome: string,
    avatar: object,
    tabela: object,
    bairro: string,
    postoID: string
}

class AtualizaPostoService {

    async execute({
        nome,
        avatar,
        tabela,
        bairro,
        postoID
    }: postoRequest) {

        const _posto = await prismaClient.posto.findFirst({
            where: {
                id: postoID
            }
        })


        const posto = await prismaClient.posto.updateMany({
            where: {
                id: postoID
            },
            data: {
                nome,
                avatar,
                tabela,
                tabela_anterior: _posto.tabela,
                bairro,
                updatedAt: new Date()
            }
        })

        return posto
    }
}

export { AtualizaPostoService }