import prismaClient from "../../prisma";

interface postoRequest {
    nome: string,
    avatar: object,
    tabela: object,
    tabela_anterior: object,
    bairro:string,
    postoID: string
}

class AtualizaPostoService {

    async execute({
        nome,
        avatar,
        tabela,
        tabela_anterior,
        bairro,
        postoID
    }: postoRequest) {

        const posto = await prismaClient.posto.updateMany({
            where: {
                id: postoID
            },
            data: {
                nome,
                avatar,
                tabela,
                tabela_anterior,
                bairro
            }
        })

        return posto
    }
}

export { AtualizaPostoService }