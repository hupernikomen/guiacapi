import prismaClient from "../../prisma";

interface BannerRequest {
    regionID: string
}

class ListarBannersService {
    async execute({ regionID }: BannerRequest) {

        const _banners = await prismaClient.banner.findMany({
            where: {
                OR: [
                    { user: { regionID }, global: false },
                    { global: true },
                ]
            },
            select: {
                image: true,
                route: true,
                paramsID: true,
                createdAt: true,
                global: true,
                userID: true,
                user: {
                    select: {
                        payment: {
                            select: {
                                expiration: true,
                                referenceID:true,
                                userID: true,
                                
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