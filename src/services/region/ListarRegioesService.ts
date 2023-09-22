import prismaClient from "../../prisma";

class ListarRegioesService {
    async execute() {

        const _region = await prismaClient.region.findMany({
            where:{
                user:{every:{status:true}}
            },
            select: {
                id: true,
                name: true,
            }
        })

        return _region
    }
}

export { ListarRegioesService }