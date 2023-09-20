import prismaClient from "../../prisma";

class ListarRegioesService {
    async execute() {

        const _region = await prismaClient.region.findMany({
            select: {
                id: true,
                name: true,
                user:{select:{_count:true}}
            }
        })

        return _region
    }
}

export { ListarRegioesService }