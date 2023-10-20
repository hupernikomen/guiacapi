import prismaClient from "../../prisma";

class ListarBannersService {
    async execute() {

        const _banners = await prismaClient.banner.findMany({

            where: { user: { payment: { every: { paymentOf: 'outdoor' } } } },

            select: {
                image: true,
                route: true,
                paramsID: true,
                createdAt: true,
                userID: true,
                user: {
                    select: {
                        payment: {
                            select: {
                                expiration: true,
                                paymentOf: true,
                            }
                        }
                    }
                }
            }
        })

        return _banners
    }
}

export { ListarBannersService }