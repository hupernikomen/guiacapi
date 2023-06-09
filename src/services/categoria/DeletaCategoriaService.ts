import prismaClient from "../../prisma";

interface DeleteCategoriaRequest {
    categoriaID: string
}

class DeletaCategoriaService {

    async execute({
        categoriaID
    }: DeleteCategoriaRequest) {

        const categoria = await prismaClient.categoria.findFirst({
            where: {
                id: categoriaID
            }
        })

        if(!categoria) {
            throw new Error("Categoria não existe");
        }

        const categoriaDelete = await prismaClient.categoria.delete({
            where: {
                id: categoriaID
            }
        })

        return categoriaDelete

    }
}

export { DeletaCategoriaService  }