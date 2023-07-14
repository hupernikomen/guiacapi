import prismaClient from "../../prisma";

interface bannerRequest {
    rota: string,
    id_rota: string,
    imagem: object,
    lojaID: string

}

class CriaBannerService {
    async execute({
        rota,
        id_rota,
        imagem,
        lojaID
    }: bannerRequest) {

        const bannerAtivo = await prismaClient.banner.findFirst({
            where: {
                lojaID,
                status: true
            }
        })

        if (bannerAtivo) {
            throw new Error("Loja já possui um banner ativo");

        }

        const banner = await prismaClient.banner.create({
            data: {
                rota,
                id_rota,
                imagem,
                lojaID
            }
        })

        return banner
    }
}

export { CriaBannerService }