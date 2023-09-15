import prismaClient from "../../prisma";

interface regionRequest {
    name: string,
    theme:string
}

class CriaCampanhaService {
    async execute({
        name,
        theme
    }: regionRequest) {

        const _campaign = await prismaClient.campaign.findFirst({
            where: {
                name
            }
        })

        if (_campaign) {
            throw new Error("Campanha já existe");
            
        }

        const __campanha = await prismaClient.campaign.create({
            data: {
                name,
                theme
            }
        })

        return __campanha
    }
}

export { CriaCampanhaService }