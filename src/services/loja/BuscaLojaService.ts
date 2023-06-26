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

        const loja = await prismaClient.usuario.findFirst({
            where: {
                status:true,
                id: usuarioID,
                
            },
            select:{
                id:true,
                email:true,
                loja:{
                    select:{
                        id:true,
                        nome:true,
                        
                        produtos:true
                    }
                },
                contato:true,
                mapa:true,
               
            }
        })

        return loja
    }
}

export { BuscaLojaService }