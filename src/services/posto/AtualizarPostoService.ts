import prismaClient from "../../prisma";

interface postoRequest {
    nome: string,
    avatar: string,
    tabela: object,
    bairro:string,
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

        const posto = await prismaClient.posto.update({
            where: {
                id: postoID
            },
            data: {
                nome,
                avatar,
                tabela,
                bairro
            }
        })

        return posto
    }
}

export { AtualizaPostoService }