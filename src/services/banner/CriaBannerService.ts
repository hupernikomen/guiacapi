import prismaClient from "../../prisma";

interface bannerRequest {
    image: object,
    route: string,
    paramsID: string,
    global: boolean,
    userID: string,
}
class CriaBannerService {

    async execute({
        image,
        route,
        paramsID,
        global,
        userID,
    }: bannerRequest) {
        const _banner = await prismaClient.banner.create({
            data: {
                image,
                route,
                paramsID,
                userID,
                global
            }
        })

        return _banner
    }
}

export { CriaBannerService }