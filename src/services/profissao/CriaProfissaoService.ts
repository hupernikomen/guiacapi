import prismaClient from "../../prisma";

interface profissaoRequest {
    nome: string,
    avatar:string
}

class CriaProfissaoService {

    async execute({

        nome,
        avatar

    }: profissaoRequest) {

        const profissao = await prismaClient.profissao.create({
            data: {
               
                nome,
                avatar
            }
        })

        return profissao
    }
}

export { CriaProfissaoService }