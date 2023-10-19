import prismaClient from "../../prisma";

interface bannerRequest {
    route: string,
    paramsID: string,
    image: object,
    global: boolean,
    userID: string,
}
class CriaBannerService {
    async execute({
        route,
        paramsID,
        image,
        global,
        userID,
    }: bannerRequest) {
        const _banner = await prismaClient.banner.create({
            data: {
                route,
                paramsID,
                image,
                userID,
                global
            }
        })

        return _banner
    }
}

export { CriaBannerService }