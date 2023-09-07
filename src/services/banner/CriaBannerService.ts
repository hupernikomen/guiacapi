import prismaClient from "../../prisma";

interface bannerRequest {
    link: string,
    params: string,
    imagem: object,
    lojaID: string

}

class CriaBannerService {
    async execute({
        link,
        params,
        imagem,
        lojaID
    }: bannerRequest) {

        const banner = await prismaClient.banner.create({
            data: {
                link,
                params,
                imagem,
                lojaID
            }
        })

        return banner
    }
}

export { CriaBannerService }