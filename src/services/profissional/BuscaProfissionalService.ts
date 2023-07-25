import prismaClient from "../../prisma";

interface profissionalRequest {
    profissionalID: string
}


class BuscaProfissionalService {
    async execute({
        profissionalID
    }: profissionalRequest) {

        const profissional = await prismaClient.profissional.findFirst({

            where: {
                profissaoID: profissionalID,
                usuario: {
                    status: true
                }

            },
            select: {
                usuario: true,
                id: true,
                nome: true,
                avatar: true,
                bio: true,
                bairro: true,
                endereco: true,
                profissaoID: true,
                lista_servicos: true,
                album:true,
                profissao: {
                    select: {
                        nome: true
                    }
                }
            }
        })



        return profissional
    }
}

export { BuscaProfissionalService }