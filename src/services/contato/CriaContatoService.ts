import prismaClient from "../../prisma";

interface contatoRequest {
    nome: string,
    avatar: object,
    whatsapp: string,
    setor: string,
    horario: object,
    sabado: boolean,
    domingo: boolean,
    usuarioID: string
}

class CriaContatoService {

    async execute({

        nome,
        avatar,
        whatsapp,
        setor,
        horario,
        sabado,
        domingo,
        usuarioID

    }: contatoRequest) {

        const contatoExiste = await prismaClient.contato.findFirst({
            where: {
                whatsapp
            }
        })

        if (contatoExiste) throw new Error("Erro: Contato em uso");

        const contato = await prismaClient.contato.create({
            data: {
                nome,
                avatar,
                whatsapp,
                setor,
                horario,
                sabado,
                domingo,
                usuarioID
            }
        })


        return contato
    }
}

export { CriaContatoService }