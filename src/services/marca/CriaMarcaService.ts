import prismaClient from "../../prisma";

interface marcaRequest {
    nome: string,
    avatar: object,
}

class CriaMarcaService {

    async execute({
        nome,
        avatar,

    }: marcaRequest) {

        const marca = await prismaClient.marca.create({
            data: {
                nome,
                avatar,
            }
        })

        return marca
    }
}

export { CriaMarcaService }