import prismaClient from "../../prisma";

interface servicoRequest {
    name: string,
    status: boolean,
    theme: string,
    campaignID: string
}

class AtualizaCampanhaService {

    async execute({
        name,
        status,
        theme,
        campaignID
    }: servicoRequest) {

        const _campaign = await prismaClient.campaign.update({
            where:{
                id:campaignID
            },
            data: {
                name,
                status,
                theme,
            }
        })

        return _campaign
    }
}

export { AtualizaCampanhaService  }