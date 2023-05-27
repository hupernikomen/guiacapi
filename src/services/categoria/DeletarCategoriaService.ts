import prismaClient from "../../prisma";

interface DeleteCategoriaRequest {
    categoriaID: string
}

class DeletarCategoriaService {

    async execute({
        categoriaID
    }: DeleteCategoriaRequest) {

        const categoria = await prismaClient.categoria.findUnique({
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

export { DeletarCategoriaService  }