import prismaClient from "../../prisma"

interface profissionalRequest {
    usuarioID: string,
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
        usuarioID,
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
                usuarioID
            }
        })

        if (!profissional_existe) {
            throw new Error("Ops, infelizmente não encontramos!");
        }

        const profissional = await prismaClient.profissional.updateMany({
            where: {
                usuarioID
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