import prismaClient from "../../prisma";

interface bannerRequest {
    route: string,
    paramsID: string,
    image: object,
    userID: string
}

class CriaBannerService {
    async execute({
        route,
        paramsID,
        image,
        userID
    }: bannerRequest) {
        const _banner = await prismaClient.banner.create({
            data: {
                route,
                paramsID,
                image,
                userID
            }
        })

        return _banner
    }
}

export { CriaBannerService }