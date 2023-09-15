import prismaClient from "../../prisma";

class ListarCampanhasInativasService {
    async execute() {

        const _campaign = await prismaClient.campaign.findMany({
            where: {
                status:false
            },
            select:{
                id: true,
                name: true,
                status:true,
                theme:true
                
            }
        })

        return _campaign
    }
}

export { ListarCampanhasInativasService }