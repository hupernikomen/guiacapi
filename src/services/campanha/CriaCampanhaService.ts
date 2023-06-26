import prismaClient from "../../prisma";

interface regionRequest {
    nome: string,
    tema:string
}

class CriaCampanhaService {
    async execute({
        nome,
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
                tema
            }
        })

        return campanha
    }
}

export { CriaCampanhaService }