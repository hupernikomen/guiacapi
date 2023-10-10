import prismaClient from "../../prisma";

interface BannerRequest {
    regionID: string
}

class ListarBannersService {
    async execute({ regionID }: BannerRequest) {

        const _banners = await prismaClient.banner.findMany({
            where: {
                OR: [
                    { user: { regionID }, status: true },
                    { adminID: "b085e85a-8cf4-417f-9df8-388b51c3f38f", status: true },
                ]
            },
            select: {
                image: true,
                route: true,
                nDays:true,
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