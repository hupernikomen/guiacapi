import prismaClient from "../../prisma"

interface profissionalRequest {
    profissionalID: string,
    profissaoID:string,
    avatar: object,
    nome: string,
    bio: string,
    endereco: string,
    lista_servicos: string,
    bairro: string,
}

class AtualizarProfissionalService {
    async execute({
        profissionalID,
        profissaoID,
        avatar,
        nome,
        bio,
        endereco,
        lista_servicos,
        bairro,

    }: profissionalRequest) {

        const profissional_existe = await prismaClient.profissional.findFirst({
            where: {
                id: profissionalID
            }
        })

        if (!profissional_existe) throw new Error("Ops, infelizmente não encontramos!");


        const profissional = await prismaClient.profissional.updateMany({
            where: {
                id: profissionalID
            },
            data: {
                nome,
                avatar,
                bio,
                endereco,
                lista_servicos,
                bairro,
                profissaoID
            },

        })

        return profissional

    }
}

export { AtualizarProfissionalService }