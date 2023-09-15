import prismaClient from "../../prisma";

class ListarBannersService {
    async execute() {

        const banners = await prismaClient.banner.findMany({
            where: {
                status: true
            },
            select:{
                imagem: true,
                link:true,
                params:true,
                createdAt:true,
                status:true,
                usuarioID:true
            }
        })

        return banners
    }
}

export { ListarBannersService }