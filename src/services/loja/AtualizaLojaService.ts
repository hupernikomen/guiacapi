import prismaClient from "../../prisma"

interface lojaDataRequest {
    usuarioID: string,
    avatar: object,
    nome: string,
    bio: string,
    endereco: string,
    bairro: string,
    ponto_ref: string,
    delivery: boolean,
    tema: string
}

class AtualizaLojaService {
    async execute({
        usuarioID,
        avatar,
        nome,
        bio,
        endereco,
        bairro,
        ponto_ref,
        delivery,
        tema

    }: lojaDataRequest) {

        const loja_existe = await prismaClient.loja.findFirst({
            where: {
                
                usuarioID
            }
        })

        if (!loja_existe) {
            throw new Error("Ops, infelizmente não encontramos!");
        }

        const loja = await prismaClient.loja.updateMany({
            where: {
                usuarioID
            },
            data: {
                nome,
                avatar,
                bio,
                endereco,
                bairro,
                ponto_ref,
                delivery,
                tema
            },

        })

        return loja

    }
}

export { AtualizaLojaService }