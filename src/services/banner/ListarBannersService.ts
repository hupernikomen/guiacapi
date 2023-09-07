import prismaClient from "../../prisma";

class ListarBannersService {
    async execute() {

        const banners = await prismaClient.banner.findMany({
            select:{
                id: true,
                imagem: true,
                link:true,
                params:true,
                createdAt:true,
                status:true,
                lojaID:true
            }
        })

        return banners
    }
}

export { ListarBannersService }