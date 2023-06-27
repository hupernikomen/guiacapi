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
        const loja = await prismaClient.loja.findFirst({
            where: {
                usuario:{
                    status:true
                },
                usuarioID
            },
            select: {
                id: true,
                avatar: true,
                nome: true,
                endereco:true,
                bairro:true,
                ponto_ref:true,
                bio:true,
                produtos: true,
                delivery:true,
                usuario:{
                    select:{
                        status:true
                    }
                }
            }
        })
        

        return loja
    }
}

export { LojaLogadaService }