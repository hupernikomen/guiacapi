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
                lojaID
            },

            select: {
                id: true,
                avatar: true,
                nome: true,
                whatsapp: true,
                setor: true
            }
        })

        return vendedores
    }
}

export { ListaVddService }