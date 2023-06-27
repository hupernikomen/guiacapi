import prismaClient from "../../prisma";

interface contatoRequest {
    nome: string,
    avatar:object,
    whatsapp:string,
    setor:string,
    horario:object,
    usuarioID:string
}

class CriaContatoService {

    async execute({

        nome,
        avatar,
        whatsapp,
        setor,
        horario,
        usuarioID

    }: contatoRequest) {

        

        const contato = await prismaClient.contato.create({
            data: {
               
                nome,
                avatar,
                whatsapp,
                setor,
                horario,
                usuarioID
            }
        })
        

        return contato
    }
}

export { CriaContatoService }