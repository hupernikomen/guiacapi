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
                produtos: true,
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