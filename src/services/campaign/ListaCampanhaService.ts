import prismaClient from "../../prisma";

class ListaCampanhaService {
    async execute() {

        const _campaign = await prismaClient.campaign.findMany({
            where:{
                status:true
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

export { ListaCampanhaService }