import prismaClient from "../../prisma";

interface servicoRequest {
    nome: string,
    regiaoID: string
}

class CriarServicoService {

    async execute({

        nome,
        regiaoID

    }: servicoRequest) {

        const servico = await prismaClient.servico.create({
            data: {
               
                nome,
                regiaoID
            }
        })

        return servico
    }
}

export { CriarServicoService }