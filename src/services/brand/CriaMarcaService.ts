import prismaClient from "../../prisma";

interface marcaRequest {
    name: string,
    avatar: object,
}

class CriaMarcaService {

    async execute({ name, avatar }: marcaRequest) {

        const _brand = await prismaClient.brand.create({
            data: {
                name,
                avatar,
            }
        })

        return _brand
    }
}

export { CriaMarcaService }