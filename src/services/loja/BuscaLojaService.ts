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
                id: usuarioID

            },
            select: {
                id: true,
                // loja:true,
                loja:{
                    select:{
                        id:true,
                        nome:true,
                        produtos:{
                            select:{
                                nome:true,
                                preco:true,
                                oferta:true,
                                campanha:true
                            }
                        }
                    }
                },
                mapa:true,
                contato:true

            }
        })



        return loja
    }
}

export { BuscaLojaService }