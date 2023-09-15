import prismaClient from "../../prisma";

interface contatoRequest {
    name: string,
    avatar: object,
    whatsapp: string,
    sector: string,
    time: object,
    saturday: boolean,
    sunday: boolean,
    away:boolean,
    userID: string
}

class CriaContatoService {

    async execute({

        name,
        avatar,
        whatsapp,
        sector,
        time,
        saturday,
        sunday,
        away,
        userID

    }: contatoRequest) {

        const contatoExiste = await prismaClient.contact.findFirst({
            where: {
                whatsapp
            }
        })

        if (contatoExiste) throw new Error("Erro: Contato em uso");

        const contato = await prismaClient.contact.create({
            data: {
                name,
                avatar,
                whatsapp,
                sector,
                time,
                saturday,
                sunday,
                away,
                userID
            }
        })


        return contato
    }
}

export { CriaContatoService }