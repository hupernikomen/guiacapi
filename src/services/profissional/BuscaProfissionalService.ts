import prismaClient from "../../prisma";

interface profissionalRequest {
    usuarioID: string
}


class BuscaProfissionalService {
    async execute({
        usuarioID
    }: profissionalRequest) {

        const profissional = await prismaClient.profissional.findFirst({

            where: {
                usuario: {
                    id: usuarioID,
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