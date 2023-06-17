import prismaClient from "../../prisma";

interface vendedorRequest {
    lojaID: string
}
class ListaVddService {

    async execute({
        lojaID
    }: vendedorRequest) {

        const vendedores = await prismaClient.vendedor.findMany({
            where: {
                lojaID:lojaID
            },

            select: {
                
                id: true,
                avatar: true,
                nome: true,
                whatsapp: true,
                horario: true,
                setor: true,
            }
        })

        return vendedores
    }
}

export { ListaVddService }