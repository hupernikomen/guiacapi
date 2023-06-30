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
                  id:usuarioID,
                  status:true
                }

            },
            select: {
                usuarioID:true,
                id: true,
                nome: true,
                avatar:true,
                bio:true,
                bairro:true,
                album:true,
                endereco:true,
                profissaoID:true,
                lista_servicos:true
            }
        })

        

        return profissional
    }
}

export { BuscaProfissionalService }