import prismaClient from "../../prisma";

interface BannerRequest {
    regionID: string
}

class ListarBannersService {
    async execute({ regionID }: BannerRequest) {

        const _banners = await prismaClient.banner.findMany({
            where: {
                OR: [
                    { status: true, global: false },
                    { status: true, global: true },
                ]
            },
            select: {
                image: true,
                route: true,
                paramsID: true,
                createdAt: true,
                status: true,
                global: true,
                userID: true
            }
        })

        return _banners
    }
}

export { ListarBannersService }