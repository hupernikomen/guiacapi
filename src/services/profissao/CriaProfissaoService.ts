import prismaClient from "../../prisma";

interface servicoRequest {
    nome: string,
    avatar:string
}

class CriaProfissaoService {

    async execute({

        nome,
        avatar

    }: servicoRequest) {

        const servico = await prismaClient.profissao.create({
            data: {
               
                nome,
                avatar
            }
        })

        return servico
    }
}

export { CriaProfissaoService }