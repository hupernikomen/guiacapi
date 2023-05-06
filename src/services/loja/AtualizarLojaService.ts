import prismaClient from "../../prisma"

interface lojaDataRequest {
    lojaID: string,
    ativo: boolean,
    logo: object,
    nome: string,
    whatsapp: string,
    bio: string,
    endereco: string,
    bairro: string,
    referencia: string,
    latlng: object,
    entrega: boolean
}

class AtualizarLojaService {
    async execute({
        lojaID,
        ativo,
        logo,
        nome,
        whatsapp,
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
                ativo,
                nome,
                logo,
                whatsapp,
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

export { AtualizarLojaService }