import prismaClient from "../../prisma";

interface bannerRequest {
    route: string,
    paramsID: string,
    image: object,
    userID: string,
    adminID:string
}
class CriaBannerService {
    async execute({
        route,
        paramsID,
        image,
        userID,
        adminID
    }: bannerRequest) {
        const _banner = await prismaClient.banner.create({
            data: {
                route,
                paramsID,
                image,
                userID,
                adminID
            }
        })

        return _banner
    }
}

export { CriaBannerService }