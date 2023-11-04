import prismaClient from "../../prisma";

interface regionRequest {
    regionName: string
}

class BuscaRegiaoService {
    async execute({ regionName }: regionRequest) {

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