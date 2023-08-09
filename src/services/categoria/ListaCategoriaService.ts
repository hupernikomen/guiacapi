import prismaClient from "../../prisma";

class ListaCategoriaService {
    async execute() {

        const categoria = await prismaClient.categoria.findMany({
            select: {
                id: true,
                nome: true,
                _count: true,
                subCategoria: {
                    select: { nome: true }
                }
            }
        })

        return categoria
    }
}

export { ListaCategoriaService }