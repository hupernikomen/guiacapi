import prismaClient from "../../prisma";

interface lojaRequest {
    usuarioID: string
}


class BuscaLojaService {
    async execute({
        usuarioID
    }: lojaRequest) {

        const loja = await prismaClient.loja.findFirst({

            where: {
                usuarioID
            },
            select: {
                id: true,
                avatar:true,
                nome: true,
                produtos: {
                    select:{
                        id:true,
                        categoriaID:true,
                        campanha:true,
                        nome:true,
                        preco:true,
                        oferta:true,
                        descricao:true,
                        tamanho:true,
                        codigo:true,
                        imagens:true
                    }
                },
                usuario:{
                    select:{
                        id:true,
                        mapa:true
                    }
                }
                
            }
        })

        

        return loja
    }
}

export { BuscaLojaService }