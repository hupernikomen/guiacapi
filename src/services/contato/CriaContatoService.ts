import prismaClient from "../../prisma";

interface contatoRequest {
    nome: string,
    avatar:string,
    whatsapp:string,
    horario:object,
    usuarioID:string
}

class CriaContatoService {

    async execute({

        nome,
        avatar,
        whatsapp,
        horario,
        usuarioID

    }: contatoRequest) {

        const contato = await prismaClient.contato.create({
            data: {
               
                nome,
                avatar,
                whatsapp,
                horario,
                usuarioID
            }
        })

        return contato
    }
}

export { CriaContatoService }