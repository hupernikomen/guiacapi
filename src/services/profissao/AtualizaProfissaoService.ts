import prismaClient from "../../prisma";

interface profissaoRequest {
    nome: string,
    profissaoID: string
}

class AtualizaProfissaoService {

    async execute({
        nome,
        profissaoID
    }: profissaoRequest) {

        const profissao = await prismaClient.profissao.update({
            where: {
                id: profissaoID
            },
            data: {
                nome,
            }
        })

        return profissao
    }
}

export { AtualizaProfissaoService }