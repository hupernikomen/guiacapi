import prismaClient from "../../prisma";

interface lojaRequest {
    userID: string
}

class LojaLogadaService {
    async execute({ userID }: lojaRequest) {
        const _store = await prismaClient.store.findFirst({
            where: { user: { status: true }, userID },
            select: {
                id: true,
                avatar: true,
                name: true,
                address: true,
                district: true,
                reference: true,
                bio: true,
                delivery: true,
                user: { select: { status: true } },
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
                        color: true,
                        reference: true,
                        image: true
                    }
                }
            }
        })

        return _store
    }
}

export { LojaLogadaService }