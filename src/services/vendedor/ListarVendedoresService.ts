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
                id: lojaID
            },
            
            select: {
                nome: true,
                whatsapp: true,
                foto: true
            }
        })

        return vendedores
    }
}

export { ListarVendedoresService }