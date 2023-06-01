import prismaClient from "../../prisma"

interface lojaDataRequest {
    lojaID: string,
    statusGuia: boolean,
    avatar: object,
    nome: string,
    bio: string,
    endereco: string,
    bairro: string,
    referencia: string,
    latlng: object,
    entrega: boolean
}

class AtualizaLjService {
    async execute({
        lojaID,
        statusGuia,
        avatar,
        nome,
        bio,
        endereco,
        bairro,
        referencia,
        latlng,
        entrega

    }: lojaDataRequest) {

        const loja = await prismaClient.loja.findUnique({
            where: {
                id: lojaID
            }
        })

        if (!loja) {
            throw new Error("Ops, infelizmente não encontramos!");

        }


        const data = await prismaClient.loja.update({
            where: {
                id: lojaID
            },
            data: {
                statusGuia,
                nome,
                avatar,
                bio,
                endereco,
                bairro,
                referencia,
                latlng,
                entrega
            }
        })

        return data

    }
}

export { AtualizaLjService }