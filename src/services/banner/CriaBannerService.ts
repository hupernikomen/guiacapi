import prismaClient from "../../prisma";

interface bannerRequest {
    route: string,
    paramsID: string,
    image: object,
    userID: string,
    regionID:string
}
class CriaBannerService {
    async execute({
        route,
        paramsID,
        image,
        userID,
        regionID
    }: bannerRequest) {
        const _banner = await prismaClient.banner.create({
            data: {
                route,
                paramsID,
                image,
                userID,
                regionID
            }
        })

        return _banner
    }
}

export { CriaBannerService }