import prismaClient from "../../prisma";

interface bannerRequest {
    userID: string
}

class BuscaBannerService {
    async execute({ userID }: bannerRequest) {

        const _banner = await prismaClient.banner.findMany({

            where: { userID },
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

        return _banner
    }
}

export { BuscaBannerService }