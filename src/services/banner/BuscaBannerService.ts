import prismaClient from "../../prisma";

interface bannerRequest {
    userID: string
}

class BuscaBannerService {
    async execute({ userID }: bannerRequest) {


        const _banner = await prismaClient.banner.findFirst({

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
                                datePayment: true,
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