import prismaClient from "../../prisma";

class ListarBannersService {
    async execute() {

        const today = new Date().toLocaleDateString('pt-BR');
        const _banners = await prismaClient.banner.findMany({

            where: { user: { payment: { every: { AND: [{ expiration: { gte: today } }] } } } },
            select: {
                image: true,
                route: true,
                paramsID: true,
                userID: true,
                user: {
                    select: {
                        payment: {
                            select: {
                                expiration: true,
                            }
                        }
                    }
                }
            }
        })

        return _banners
    }
}

export { ListarBannersService }