import prismaClient from "../../prisma";

interface vendedorRequest {
    lojaID: string
}
class ListarVendedoresService {

    async execute({
        lojaID
    }: vendedorRequest) {

        const vendedores = await prismaClient.vendedor.findMany({
            where: {
                id: lojaID,
                // lojaID:lojaID
            },

            select: {
                lojaID:true,
                id:true,
                nome: true,
                whatsapp: true,
                setor:true
            }
        })

        return vendedores
    }
}

export { ListarVendedoresService }