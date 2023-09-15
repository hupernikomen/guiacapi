import prismaClient from "../../prisma";

interface bannerRequest {
    link: string,
    params: string,
    imagem: object,
    usuarioID: string
}

class CriaBannerService {
    async execute({
        link,
        params,
        imagem,
        usuarioID
    }: bannerRequest) {
        const banner = await prismaClient.banner.create({
            data: {
                link,
                params,
                imagem,
                usuarioID
            }
        })

        return banner
    }
}

export { CriaBannerService }