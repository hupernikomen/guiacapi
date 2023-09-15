import prismaClient from "../../prisma";

class ListarBannersService {
    async execute() {

        const _banners = await prismaClient.banner.findMany({
            where: {
                status: true
            },
            select:{
                image: true,
                route:true,
                paramsID:true,
                createdAt:true,
                status:true,
                userID:true
            }
        })

        return _banners
    }
}

export { ListarBannersService }