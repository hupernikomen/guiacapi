import prismaClient from "../../prisma";

interface profissionalRequest {
    profissionalID: string
}


class BuscaProfissionalService {
    async execute({
        profissionalID
    }: profissionalRequest) {

        const profissional = await prismaClient.profissional.findUnique({
            where: {
                id: profissionalID,
            },
            select: {
                id: true,
                nome: true,
                avatar: true,
                bio: true,
                endereco: true,
                lista_servicos: true,
                usuarioID:true,
                profissao: {
                    select: {
                        id:true,
                        nome: true,
                    }
                }
            }
        })



        return profissional
    }
}

export { BuscaProfissionalService }