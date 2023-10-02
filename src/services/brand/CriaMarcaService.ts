import prismaClient from "../../prisma";

interface marcaRequest {
    name: string,
    avatar: object,
    userID: string
}

class CriaMarcaService {

    async execute({ name, avatar,userID }: marcaRequest) {

        const _brand = await prismaClient.brand.create({
            data: {
                name,
                avatar,
                userID
            }
        })

        return _brand
    }
}

export { CriaMarcaService }