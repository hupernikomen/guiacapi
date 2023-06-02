import prismaClient from "../../prisma";

interface regionRequest {
    nome: string,
    status:boolean,
    tema:string
}

class CriaCampService {
    async execute({
        nome,
        status,
        tema
    }: regionRequest) {

        const campanhaExiste = await prismaClient.campanha.findFirst({
            where: {
                nome
            }
        })

        if (campanhaExiste) {
            throw new Error("Campanha já existe");
            
        }

        const campanha = await prismaClient.campanha.create({
            data: {
                nome,
                status,
                tema
            }
        })

        return campanha
    }
}

export { CriaCampService }