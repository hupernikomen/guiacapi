import prismaClient from "../../prisma";

interface regionRequest {
    regionName: string
}

class BuscaRegiaoService {
    async execute({ regionName }: regionRequest) {

        const _region = await prismaClient.region.findFirst({
            where: {
                name: "Teresina"
            },
        })


        if (!_region) {
            await prismaClient.region.create({ data: { name: "Teresina" } })
        }

        const region = await prismaClient.region.findFirst({
            where: {
                name: regionName
            },
            select: {
                id:true,
                name:true
  
            }
        })



        return region
    }
}

export { BuscaRegiaoService }