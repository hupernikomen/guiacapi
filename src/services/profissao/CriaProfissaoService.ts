import prismaClient from "../../prisma";

interface profissaoRequest {
    nome: string,
}

class CriaProfissaoService {

    async execute({

        nome,

    }: profissaoRequest) {

        const profissao = await prismaClient.profissao.create({
            data: {
                nome,
            }
        })

        return profissao
    }
}

export { CriaProfissaoService }