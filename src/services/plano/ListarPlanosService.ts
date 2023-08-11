import prismaClient from "../../prisma";

class ListarPlanosService {
    async execute() {

        const planos = await prismaClient.plano.findMany({
            select:{
                id:true,
                nome:true,
                pacote:true,
                oferta:true,
                valor:true
            }
        })

        return planos
    }
}

export { ListarPlanosService }