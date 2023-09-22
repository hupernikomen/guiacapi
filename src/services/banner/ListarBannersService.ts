import prismaClient from "../../prisma";

interface BannerRequest {
    regionID: string
}

class ListarBannersService {
    async execute({ regionID }: BannerRequest) {

        const _banners = await prismaClient.banner.findMany({
            where: {
                status: true,
                user: { regionID: regionID || null }
            },
            select: {
                image: true,
                route: true,
                paramsID: true,
                createdAt: true,
                status: true,
                userID: true
            }
        })

        return _banners
    }
}

export { ListarBannersService }