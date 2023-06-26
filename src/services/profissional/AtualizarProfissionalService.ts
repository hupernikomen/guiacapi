import prismaClient from "../../prisma"

interface profissionalRequest {
    usuarioID: string,
    profissaoID:string,
    avatar: object,
    nome: string,
    bio: string,
    endereco: string,
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
                bairro,
                profissaoID
            },

        })

        return profissional

    }
}

export { AtualizarProfissionalService }