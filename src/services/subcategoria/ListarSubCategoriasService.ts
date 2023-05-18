import prismaClient from "../../prisma";

class ListarSubCategoriasService {
    async execute() {

        const subcategoria = await prismaClient.subCategoria.findMany({
            select: {
                id: true,
                nome: true,
            }
        })

        return subcategoria
    }
}

export { ListarSubCategoriasService }