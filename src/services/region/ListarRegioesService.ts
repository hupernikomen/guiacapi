import prismaClient from "../../prisma";

class ListarRegioesService {
    async execute() {

        const region = await prismaClient.region.findFirst({
            where: {
                name: "Teresina"
            },
        })


        if (!region) {
            await prismaClient.region.create({ data: { name: "Teresina" } })
        }

        const _region = await prismaClient.region.findMany({
            select: {
                id: true,
                name: true,
            }
        })

        return _region
    }
}

export { ListarRegioesService }