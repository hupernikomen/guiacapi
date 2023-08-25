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

        const marcaExiste = await prismaClient.marca.findFirst({
            where: {
                nome
            }
        })

        if (marcaExiste) throw new Error("Erro: Marca já registrada");

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