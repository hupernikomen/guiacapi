import prismaClient from "../../prisma";

interface profissaoRequest {
    nome: string,
    avatar: string,
    profissaoID: string
}

class AtualizaProfissaoService {

    async execute({
        nome,
        avatar,
        profissaoID
    }: profissaoRequest) {

        const profissao = await prismaClient.profissao.update({
            where: {
                id: profissaoID
            },
            data: {
                nome,
                avatar
            }
        })

        return profissao
    }
}

export { AtualizaProfissaoService }