import prismaClient from "../../prisma";

interface lojaRequest {
    usuarioID: string
}

/**
 * Busca a loja selecionada
 * Deverá ser exibida quando o usuario do app solicitar pagina da loja
 */

class BuscaLojaService {
    async execute({
        usuarioID
    }: lojaRequest) {

        const loja = await prismaClient.loja.findFirst({

            where: {
                usuario: {
                    status: true,
                },
                id: usuarioID,

            },
            select: {
                id: true,
                nome: true,
                produtos: true
            }
        })

        return loja
    }
}

export { BuscaLojaService }