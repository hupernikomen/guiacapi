import prismaClient from "../../prisma";

class ListaCtService {
    async execute() {

        const categoria = await prismaClient.categoria.findMany({
            select: {
                id: true,
                nome: true,
                _count:true,
            }
        })

        return categoria
    }
}

export { ListaCtService }