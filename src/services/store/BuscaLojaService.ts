import prismaClient from "../../prisma";

interface lojaRequest {
    userID: string
}

class BuscaLojaService {
    async execute({ userID }: lojaRequest) {

        const loja = await prismaClient.store.findFirst({

            where: {
                userID
            },
            select: {
                id: true,
                avatar: true,
                name: true,
                address: true,
                delivery:true,
                bio:true,
                district:true,
                reference:true,
                product: {
                    select: {
                        id: true,
                        categoryID: true,
                        campaign: true,
                        name: true,
                        price: true,
                        off: true,
                        description: true,
                        size: true,
                        reference: true,
                        image: true
                    }
                },
                userID: true,
                user: {
                    select: { map: { select: { latlng: true } } }
                }
            }
        })



        return loja
    }
}

export { BuscaLojaService }