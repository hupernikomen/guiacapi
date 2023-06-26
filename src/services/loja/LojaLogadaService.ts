import prismaClient from "../../prisma";

interface lojaRequest {
    usuarioID: string
}

/**
 * Para rota de loja com usuario logado
 * O conteudo deverá ser exxibido na tela de admin da loja
 */

class LojaLogadaService {
    async execute({
        usuarioID
    }: lojaRequest) {
        const loja = await prismaClient.usuario.findUnique({
            where: {
                id: usuarioID
            },
            select: {
                id: true,
                loja: true

            }
        })

        return loja
    }
}

export { LojaLogadaService }