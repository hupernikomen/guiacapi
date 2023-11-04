import prismaClient from "../../prisma";

interface regionRequest {
    regionID: string
}

class BuscaRegiaoService {
    async execute({ regionID }: regionRequest) {

        const region = await prismaClient.region.findFirst({
            where: {
                id: regionID
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