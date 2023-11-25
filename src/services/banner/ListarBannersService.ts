import prismaClient from "../../prisma";

class ListarBannersService {
    async execute() {

        const _banners = await prismaClient.banner.findMany({

            where: { user: { paymentBanners: { some: { status: "Aprovado" } } } },
            select: {
                image: true,
                route: true,
                paramsID: true,
                userID: true,
                user: {
                    select: {
                        payment: {
                            select: {
                                expiration: true,
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